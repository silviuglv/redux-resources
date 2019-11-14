import { accountInviteActions, notificationActions } from '../actions'
import { put, takeEvery, call, select } from 'redux-saga/effects'
import { accountInviteApi } from '../../api'
import { authUser } from '../selectors'
import { AnyAction } from 'redux'

export function* getAccountInvites({ payload }: any) {
	try {
		yield put(accountInviteActions.accountInvitesInitialState())
		yield put(accountInviteActions.accountInvitesLoading())
		const { data } = yield call(accountInviteApi.getAccountInvites, payload)
		yield put(accountInviteActions.accountInvitesFulfilled(data))
	} catch (error) {
		yield put(accountInviteActions.accountInvitesRejected(error))
	}
}

export function* myAccountInvites() {
	const state = yield select()
	const user = authUser(state)

	try {
		yield put(accountInviteActions.getMyAccountInvitesInitialState())
		yield put(accountInviteActions.getMyAccountInvitesLoading())
		const params = {
			emails: user.data.email,
			status: 'pending',
		}
		const { data } = yield call(accountInviteApi.getAccountInvites, params)
		yield put(accountInviteActions.getMyAccountInvitesFulfilled(data))
	} catch (error) {
		yield put(accountInviteActions.getMyAccountInvitesRejected(error))
	}
}

export function* showAccountInvite({ id }: any) {
	try {
		yield put(accountInviteActions.showAccountInviteInitialState())
		yield put(accountInviteActions.showAccountInviteLoading())
		const { data } = yield call(accountInviteApi.showAccountInvite, id)
		yield put(accountInviteActions.showAccountInviteFulfilled(data))
	} catch (error) {
		yield put(accountInviteActions.showAccountInviteRejected(error))
	}
}

export function* deleteAccountInvite({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountInviteActions.deleteAccountInviteInitialState())
		yield put(accountInviteActions.deleteAccountInviteLoading())
		const { data } = yield call(accountInviteApi.deleteAccountInvite, payload.id)
		yield put(accountInviteActions.deleteAccountInviteFulfilled(data))
		successCb && successCb()
		yield call(getAccountInvites, {
			query: { account_ids: payload.account.id, status: 'pending' },
		})
		yield put(notificationActions.displaySnackbarMessage('Account Invitation Deleted!', 2000))
	} catch (error) {
		yield put(accountInviteActions.deleteAccountInviteRejected(error))
		errorCb && errorCb()
	}
}

export function* deleteMyAccountInvite({ payload }: AnyAction) {
	try {
		yield put(accountInviteActions.deleteAccountInviteLoading())
		const { data } = yield call(accountInviteApi.deleteAccountInvite, payload.id)
		yield put(accountInviteActions.deleteAccountInviteFulfilled(data))
		yield call(myAccountInvites)
		yield put(notificationActions.displaySnackbarMessage('Account Invitation Deleted!', 2000))
	} catch (error) {
		yield put(accountInviteActions.deleteAccountInviteRejected(error))
	}
}

export function* createAccountInvite({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountInviteActions.createAccountInviteInitialState())
		yield put(accountInviteActions.createAccountInviteLoading())
		const { data } = yield call(accountInviteApi.create, payload)
		yield put(accountInviteActions.createAccountInviteFulfilled(data))
		yield call(getAccountInvites, {
			query: { account_ids: payload.account_id, status: 'pending' },
		})
		successCb && successCb()
	} catch (error) {
		yield put(accountInviteActions.createAccountInviteRejected(error))
		errorCb && errorCb(error)
	}
}

export function* acceptAccountInvite({ payload }: AnyAction) {
	try {
		yield put(accountInviteActions.acceptAccountInviteInitialState())
		yield put(accountInviteActions.acceptAccountInviteLoading())
		const { data } = yield call(accountInviteApi.accept, payload.id)
		yield put(accountInviteActions.acceptAccountInviteFulfilled(data))
		yield call(myAccountInvites)
		yield put(notificationActions.displaySnackbarMessage('Account Invitation Accepted!', 2000))
	} catch (error) {
		yield put(accountInviteActions.acceptAccountInviteRejected(error))
	}
}

export function* accountInvites() {
	yield takeEvery(accountInviteActions.GET_ACCOUNT_INVITES, getAccountInvites)
	yield takeEvery(accountInviteActions.DELETE_ACCOUNT_INVITE, deleteAccountInvite)
	yield takeEvery(accountInviteActions.DELETE_MY_ACCOUNT_INVITE, deleteMyAccountInvite)
	yield takeEvery(accountInviteActions.CREATE_ACCOUNT_INVITE, createAccountInvite)
	yield takeEvery(accountInviteActions.ACCEPT_ACCOUNT_INVITE, acceptAccountInvite)
	yield takeEvery(accountInviteActions.GET_MY_ACCOUNT_INVITES, myAccountInvites)
	yield takeEvery(accountInviteActions.SHOW_ACCOUNT_INVITE, showAccountInvite)
}
