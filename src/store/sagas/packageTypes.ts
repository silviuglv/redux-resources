import { packageTypeActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { packageTypeApi } from '../../api'

export function* getPackageTypes(payload) {
	try {
		yield put(packageTypeActions.setPackageTypesLoading())
		const { data } = yield call(packageTypeApi.getPackageTypes, payload)
		yield put(packageTypeActions.setPackageTypesFulfilled(data))
	} catch (error) {
		yield put(packageTypeActions.setPackageTypesRejected(error))
	}
}

export function* packageTypes() {
	yield takeEvery(packageTypeActions.GET_PACKAGE_TYPES, getPackageTypes)
}
