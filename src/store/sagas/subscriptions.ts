import { notificationActions, subscriptionActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { subscriptionApi } from '../../api'
import { AnyAction } from 'redux'

function* getSubscriptions({ payload }: AnyAction) {
	try {
		yield put(subscriptionActions.setSubscriptionsLoading())
		const { data } = yield call(subscriptionApi.getSubscriptions, payload)
		yield put(subscriptionActions.setSubscriptionsFulfilled(data))
	} catch (error) {
		yield put(subscriptionActions.setSubscriptionsRejected(error))
	}
}

function* createSubscription({ account, plan, coupon, successCb, errorCb }: AnyAction) {
	const payload = {
		account_id: account.id,
		plan_id: plan.id,
		coupon,
	}
	try {
		yield put(subscriptionActions.setCreateSubscriptionLoading())
		const { data } = yield call(subscriptionApi.createSubscription, payload)
		yield put(subscriptionActions.setCreateSubscriptionFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Subscription created!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(subscriptionActions.setCreateSubscriptionRejected(error))
		errorCb && errorCb()
	}
}

function* updateSubscription({ subscription, plan, coupon = null, successCb, errorCb }: AnyAction) {
	const payload = {
		plan_id: plan.id,
		coupon,
	}
	try {
		yield put(subscriptionActions.setUpdateSubscriptionLoading())
		const { data } = yield call(subscriptionApi.updateSubscription, subscription.id, payload)
		yield put(subscriptionActions.setUpdateSubscriptionFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Subscription updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(subscriptionActions.setUpdateSubscriptionRejected(error))
		errorCb && errorCb()
	}
}

function* deleteSubscription({ subscription, successCb, errorCb }: AnyAction) {
	try {
		yield put(subscriptionActions.setDeleteSubscriptionLoading())
		const { data } = yield call(subscriptionApi.deleteSubscription, subscription.id)
		yield put(subscriptionActions.setDeleteSubscriptionFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Subscription deleted', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(subscriptionActions.setDeleteSubscriptionRejected(error))
		errorCb && errorCb()
	}
}

export function* subscriptions() {
	yield takeEvery(subscriptionActions.GET_SUBSCRIPTIONS, getSubscriptions)
	yield takeEvery(subscriptionActions.CREATE_SUBSCRIPTION, createSubscription)
	yield takeEvery(subscriptionActions.UPDATE_SUBSCRIPTION, updateSubscription)
	yield takeEvery(subscriptionActions.DELETE_SUBSCRIPTION, deleteSubscription)
}
