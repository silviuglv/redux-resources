import { fieldActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { fieldApi } from '../../api'
import { AnyAction } from 'redux'

export function* getFields({ packageId, payload = {}, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.getFieldsLoading())
		const { data } = yield call(fieldApi.getFields, packageId, payload)
		yield put(fieldActions.getFieldsFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.getFieldsRejected(error))
		errorCb && errorCb()
	}
}

function* createField({ packageId, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.setItemLoading())
		const { data } = yield call<any>(fieldApi.createField, packageId, payload)
		yield put(fieldActions.addItemToList(data))
		yield put(fieldActions.setItemFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

function* updateField({ packageId, fieldId, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.setItemLoading())
		const { data } = yield call<any>(fieldApi.updateField, packageId, fieldId, payload)
		yield put(fieldActions.updateItemInList(data))
		yield put(fieldActions.setItemFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

function* deleteField({ packageId, fieldId, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.setItemLoading())
		yield call<any>(fieldApi.deleteField, packageId, fieldId)
		yield put(fieldActions.removeItemInList(fieldId))
		yield put(fieldActions.setItemFulfilled(null))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

export function* fields() {
	yield takeEvery(fieldActions.GET_FIELDS, getFields)
	yield takeEvery(fieldActions.CREATE_FIELD, createField)
	yield takeEvery(fieldActions.UPDATE_FIELD, updateField)
	yield takeEvery(fieldActions.DELETE_FIELD, deleteField)
}
