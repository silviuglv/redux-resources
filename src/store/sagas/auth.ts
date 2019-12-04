import { accountActions, authActions, notificationActions } from '../actions'
import { put, takeEvery, call, select } from 'redux-saga/effects'
import { oauthApi, userApi } from '../../api'
import { getAccounts, getDefaultAccount } from './accounts'
import { authUser } from '../selectors'

function* getAuthUser() {
	try {
		yield put(authActions.authUserLoading())
		const { data } = yield call(userApi.me)
		yield put(authActions.authUserData(data))
		yield put(authActions.authUserLoaded())
	} catch (error) {
		yield put(authActions.authUserError(error))
		yield put(authActions.authUserNotLoaded())
	}
}

function* authUserInitialState() {
	yield put(authActions.authUserData(null))
	yield put(authActions.authUserError(null))
	yield put(authActions.authUserNotLoaded())
}

function* login({ payload, provider = null, access_token = null, token_secret = null }: any) {
	try {
		yield put(authActions.createAccessTokenInitialState())
		yield put(authActions.createAccessToken())
		yield put(authActions.createAccessTokenLoading())

		const { data } =
			payload !== undefined
				? yield call(oauthApi.createAccessToken, payload)
				: yield call(oauthApi.createSocialAccessToken, provider, access_token, token_secret)

		yield put(authActions.createAccessTokenFulfilled(data))
	} catch (error) {
		yield put(authActions.createAccessTokenRejected(error))
		yield put(notificationActions.displaySnackbarMessage(error.message, 2000))
	}
}

function* logout({ successCb }: any) {
	//  auth
	window.localStorage.removeItem('accessToken')
	yield put(authActions.createAccessTokenInitialState())
	window.localStorage.removeItem('userMeta')
	yield put(authActions.authUserInitialState())
	yield put(authActions.authMetaInitialState())

	//  accounts
	window.localStorage.removeItem('defaultAccount')
	window.localStorage.removeItem('accountList')
	yield put(accountActions.getDefaultAccountInitialState())
	yield put(accountActions.accountsInitialState())
	// disconnect from pusher
	yield put(notificationActions.disconnectFromNotificationService())
	successCb !== undefined && successCb()
}

function* getAuthMeta() {
	try {
		const state = yield select()
		const user = authUser(state)
		yield put(authActions.authMetaInitialState())
		yield put(authActions.authMetaLoading())
		const { data } = yield call(userApi.getUserMeta, user.data.id)
		yield put(authActions.authMetaFulfilled(data))
	} catch (error) {
		yield put(authActions.authMetaRejected(error))
	}
}

function* update({ id, payload }: any) {
	try {
		yield put(authActions.updateAuthUserInitialState())
		yield put(authActions.updateAuthUserLoading())
		const { data } = yield call(userApi.updateUser, id, payload)
		yield put(authActions.updateAuthUserFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Profile updated', 2000))
	} catch (error) {
		yield put(authActions.updateAuthUserRejected(error))
	}
}

function* create({ payload }: any) {
	try {
		yield put(authActions.createUserInitialState())
		yield put(authActions.createUserLoading())
		const { data } = yield call(userApi.createUser, payload)
		yield put(authActions.createUserFulfilled(data))
	} catch (error) {
		yield put(authActions.createUserRejected(error))
	}
}

function* createUserFromAccountInvite({ payload }: any) {
	try {
		yield put(authActions.createUserFromAccountInviteInitialState())
		yield put(authActions.createUserFromAccountInviteLoading())
		const { data } = yield call(userApi.createUserFromAccountInvite, payload)
		yield put(authActions.createUserFromAccountInviteFulfilled(payload))
	} catch (error) {
		yield put(authActions.createUserFromAccountInviteRejected(error))
	}
}

function* updatePhoto({ id, payload, successCb, errorCb }: any) {
	try {
		yield put(authActions.updateAuthPhotoInitialState())
		yield put(authActions.updateAuthPhotoLoading())
		const { data } = yield call(userApi.updatePicture, id, payload)
		yield put(authActions.updateAuthPhotoFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Profile photo updated!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(authActions.updateAuthPhotoRejected(error))
		errorCb !== undefined && errorCb()
	}
}

export function* loginSaga() {
	yield takeEvery(authActions.LOG_USER_IN, login)
	yield takeEvery(authActions.CREATE_SOCIAL_ACCESS_TOKEN, login)

	yield takeEvery(authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getAccounts)
	yield takeEvery(authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getDefaultAccount)
	yield takeEvery(authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getAuthUser)
	yield takeEvery(authActions.AUTH_USER_LOADED, getAuthMeta)
}

export function* logoutSaga() {
	yield takeEvery(authActions.LOG_USER_OUT, logout)
}

export function* auth() {
	yield takeEvery(authActions.AUTH_USER_INITIAL_STATE, authUserInitialState)
	yield takeEvery(authActions.UPDATE_AUTH_USER, update)
	yield takeEvery(authActions.CREATE_USER, create)
	yield takeEvery(authActions.CREATE_USER_FULFILLED, login)
	yield takeEvery(authActions.CREATE_USER_FROM_ACCOUNT_INVITE, createUserFromAccountInvite)
	yield takeEvery(authActions.CREATE_USER_FROM_ACCOUNT_INVITE_FULFILLED, login)
	yield takeEvery(authActions.UPDATE_AUTH_PHOTO, updatePhoto)
}
