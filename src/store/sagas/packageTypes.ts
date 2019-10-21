import { packageTypeActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { packageTypeApi } from '../../api'

export function* getPackageTypes(query) {
	try {
		yield put(packageTypeActions.setPackageTypesLoading())
		const response = yield call(packageTypeApi.getPackageTypes, query)
		yield put(packageTypeActions.setPackageTypesFulfilled(response))
	} catch (error) {
		yield put(packageTypeActions.setPackageTypesRejected(error))
	}
}

export function* packageTypes() {
	yield takeEvery(packageTypeActions.GET_PACKAGE_TYPES, getPackageTypes)
}
