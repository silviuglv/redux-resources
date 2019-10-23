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

function* createField({ packageId, documentId, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.setItemLoading())
		const { data } = yield call<any>(fieldApi.createField, packageId, documentId, payload)
		yield put(fieldActions.setItemFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

function* updateField({ packageId, documentId, fieldId, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.setItemLoading())
		const { data } = yield call<any>(fieldApi.updateField, packageId, documentId, fieldId, payload)
		yield put(fieldActions.setItemFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

function* deleteField({ packageId, documentId, fieldId, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldActions.setItemLoading())
		yield call<any>(fieldApi.deleteField, packageId, documentId, fieldId)
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
