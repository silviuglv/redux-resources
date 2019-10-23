import { fieldTypeActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { fieldTypeApi } from '../../api'
import { AnyAction } from 'redux'

export function* getFieldTypes({ payload }: AnyAction) {
	try {
		yield put(fieldTypeActions.setFieldTypesLoading())
		const { data } = yield call(fieldTypeApi.getFieldTypes, payload)
		yield put(fieldTypeActions.setFieldTypesFulfilled(data))
	} catch (error) {
		yield put(fieldTypeActions.setFieldTypesRejected(error))
	}
}

export function* fieldTypes() {
	yield takeEvery(fieldTypeActions.GET_FIELD_TYPES, getFieldTypes)
}
