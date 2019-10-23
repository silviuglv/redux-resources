import { connectedServiceActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { connectedServiceApi } from '../../api'
import { AnyAction } from 'redux'
import { parseApiResponse } from '../../utilities'

function* getConnectedServices({ payload = {} }: AnyAction) {
	try {
		yield put(connectedServiceActions.setConnectedServicesLoading())
		const { data } = yield call(connectedServiceApi.getConnectedServices, payload)
		yield put(connectedServiceActions.setConnectedServicesFulfilled(data))

		const list = parseApiResponse(data)
		yield put(connectedServiceActions.setConnectedServices(list.connected))
		yield put(connectedServiceActions.setAvailableServices(list.available))
	} catch (error) {
		yield put(connectedServiceActions.setConnectedServicesRejected(error))
	}
}

function* createConnectedService({ payload, successCb, errorCb }: AnyAction) {
	const { provider } = payload
	try {
		yield put(connectedServiceActions.createConnectedServiceLoading())
		const { data } = yield call(connectedServiceApi.createConnectedService, payload)
		yield put(connectedServiceActions.createConnectedServiceFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage(`${provider} account now linked!`, 2000))
		successCb && successCb()
	} catch (error) {
		yield put(connectedServiceActions.createConnectedServiceRejected(error))
		errorCb && errorCb()
	}
}

function* updateConnectedService({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(connectedServiceActions.updateConnectedServiceLoading())
		const { data } = yield call(connectedServiceApi.updateConnectedService, id, payload)
		yield put(connectedServiceActions.updateConnectedServiceFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage(`Service updated!`, 2000))
		successCb && successCb()
	} catch (error) {
		yield put(connectedServiceActions.updateConnectedServiceRejected(error))
		errorCb && errorCb()
	}
}

function* deleteConnectedService({ id, scopes = undefined, successCb, errorCb }: AnyAction) {
	try {
		yield put(connectedServiceActions.deleteConnectedServiceLoading())
		yield call(connectedServiceApi.deleteConnectedService, id, scopes)
		yield put(connectedServiceActions.deleteConnectedServiceFulfilled())
		yield put(notificationActions.displaySnackbarMessage(`Service deleted!`, 2000))

		successCb && successCb()
	} catch (error) {
		yield put(connectedServiceActions.deleteConnectedServiceRejected(error))
		errorCb && errorCb()
	}
}

export function* setConnectedServicesInitialState() {
	yield put(connectedServiceActions.setConnectedServicesInitialState())
}

export function* connectedServices() {
	yield takeEvery(connectedServiceActions.GET_CONNECTED_SERVICES, getConnectedServices)
	yield takeEvery(connectedServiceActions.SET_CONNECTED_SERVICES_INITIAL_STATE, setConnectedServicesInitialState)
	yield takeEvery(connectedServiceActions.CREATE_CONNECTED_SERVICE, createConnectedService)
	yield takeEvery(connectedServiceActions.UPDATE_CONNECTED_SERVICE, updateConnectedService)
	yield takeEvery(connectedServiceActions.DELETE_CONNECTED_SERVICE, deleteConnectedService)
	yield takeEvery(connectedServiceActions.DELETE_CONNECTED_SERVICE_FULFILLED, getConnectedServices)
}
