import { planActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { planApi } from '../../api'
import { AnyAction } from 'redux'

function* getPlans({ payload }: AnyAction) {
	try {
		yield put(planActions.setPlansLoading())
		const { data } = yield call(planApi.getPlans, payload)
		yield put(planActions.setPlansFulfilled(data))
	} catch (error) {
		yield put(planActions.setPlansRejected(error))
	}
}

export function* setPlansInitialState() {
	yield put(planActions.setPlansInitialState())
}

export function* plans() {
	yield takeEvery(planActions.GET_PLANS, getPlans)
	yield takeEvery(planActions.SET_PLANS_INITIAL_STATE, setPlansInitialState)
}
