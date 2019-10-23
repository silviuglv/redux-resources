import { authActions, notificationActions, userActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { userApi } from '../../api'
import { AnyAction } from 'redux'

function* updatePassword({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(userActions.updatePasswordInitialState())
		yield put(userActions.updatePasswordLoading())
		const { data } = yield call(userApi.updateUserPassword, id, payload)
		yield put(userActions.updatePasswordFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(userActions.updatePasswordRejected(error))
		errorCb && errorCb()
	}
}

function* resendEmailConfirmation() {
	try {
		yield put(userActions.resendEmailConfirmationInitialState())
		yield put(userActions.resendEmailConfirmationLoading())
		const { data } = yield call(userApi.resendEmailConfirmation)
		yield put(userActions.resendEmailConfirmationFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Confirmation email resent', 2000))
	} catch (error) {
		yield put(userActions.resendEmailConfirmationRejected(error))
	}
}

function* getNotificationPreferences({ id }: AnyAction) {
	try {
		yield put(userActions.getNotificationPreferencesInitialState())
		yield put(userActions.getNotificationPreferencesLoading())
		const { data } = yield call(userApi.getNotificationPreferences, id)
		yield put(userActions.getNotificationPreferencesFulfilled(data))
	} catch (error) {
		yield put(userActions.getNotificationPreferencesRejected(error))
	}
}

function* updateNotificationPreferences({ id, payload }: AnyAction) {
	try {
		yield put(userActions.updateNotificationPreferencesInitialState())
		yield put(userActions.updateNotificationPreferencesLoading())
		const { data } = yield call(userApi.updateNotificationPreferences, id, payload)
		yield put(userActions.updateNotificationPreferencesFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Notification preferences updated!', 2000))
	} catch (error) {
		yield put(userActions.updateNotificationPreferencesRejected(error))
	}
}

function* confirmEmail({ token, successCb, errorCb }: AnyAction) {
	try {
		yield put(userActions.confirmEmailInitialState())
		yield put(userActions.confirmEmailLoading())
		const { data } = yield call(userApi.confirmEmail, token)
		yield put(userActions.confirmEmailFulfilled())
		yield put(authActions.authMetaFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Email Confirmed!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(userActions.confirmEmailRejected(error))
		errorCb && errorCb()
	}
}

export function* users() {
	yield takeEvery(userActions.UPDATE_PASSWORD, updatePassword)
	yield takeEvery(userActions.RESEND_EMAIL_CONFIRMATION, resendEmailConfirmation)
	yield takeEvery(userActions.GET_NOTIFICATION_PREFERENCES, getNotificationPreferences)
	yield takeEvery(userActions.UPDATE_NOTIFICATION_PREFERENCES, updateNotificationPreferences)
	yield takeEvery(userActions.CONFIRM_EMAIL, confirmEmail)
}
