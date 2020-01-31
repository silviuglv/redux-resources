import { packageStatusActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { packageStatusApi } from '../../api'

export function* getPackageStatuses(payload) {
	try {
		yield put(packageStatusActions.setPackageStatusesLoading())
		const { data } = yield call(packageStatusApi.getPackageStatuses, payload)
		yield put(packageStatusActions.setPackageStatusesFulfilled(data))
	} catch (error) {
		yield put(packageStatusActions.setPackageStatusesRejected(error))
	}
}

export function* packageStatuses() {
	yield takeEvery(packageStatusActions.GET_PACKAGE_STATUSES, getPackageStatuses)
}
