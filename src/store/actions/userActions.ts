import { Error, NotificationPreference, UpdateNotificationPreferencesRequest, UpdatePasswordRequest } from '../../types'

const types = {
	UPDATE_PASSWORD: '[users] UPDATE_PASSWORD',
	UPDATE_PASSWORD_INITIAL_STATE: '[users] UPDATE_PASSWORD_INITIAL_STATE',
	UPDATE_PASSWORD_LOADING: '[users] UPDATE_PASSWORD_LOADING',
	UPDATE_PASSWORD_FULFILLED: '[users] UPDATE_PASSWORD_FULFILLED',
	UPDATE_PASSWORD_REJECTED: '[users] UPDATE_PASSWORD_REJECTED',

	RESEND_EMAIL_CONFIRMATION: '[users] RESEND_EMAIL_CONFIRMATION',
	RESEND_EMAIL_CONFIRMATION_INITIAL_STATE: '[users] RESEND_EMAIL_CONFIRMATION_INITIAL_STATE',
	RESEND_EMAIL_CONFIRMATION_LOADING: '[users] RESEND_EMAIL_CONFIRMATION_LOADING',
	RESEND_EMAIL_CONFIRMATION_FULFILLED: '[users] RESEND_EMAIL_CONFIRMATION_FULFILLED',
	RESEND_EMAIL_CONFIRMATION_REJECTED: '[users] RESEND_EMAIL_CONFIRMATION_REJECTED',

	CONFIRM_EMAIL: '[users] CONFIRM_EMAIL',
	CONFIRM_EMAIL_INITIAL_STATE: '[users] CONFIRM_EMAIL_INITIAL_STATE',
	CONFIRM_EMAIL_LOADING: '[users] CONFIRM_EMAIL_LOADING',
	CONFIRM_EMAIL_FULFILLED: '[users] CONFIRM_EMAIL_FULFILLED',
	CONFIRM_EMAIL_REJECTED: '[users] CONFIRM_EMAIL_REJECTED',

	GET_NOTIFICATION_PREFERENCES: '[users] GET_NOTIFICATION_PREFERENCES',
	GET_NOTIFICATION_PREFERENCES_INITIAL_STATE: '[users] GET_NOTIFICATION_PREFERENCES_INITIAL_STATE',
	GET_NOTIFICATION_PREFERENCES_LOADING: '[users] GET_NOTIFICATION_PREFERENCES_LOADING',
	GET_NOTIFICATION_PREFERENCES_FULFILLED: '[users] GET_NOTIFICATION_PREFERENCES_FULFILLED',
	GET_NOTIFICATION_PREFERENCES_REJECTED: '[users] GET_NOTIFICATION_PREFERENCES_REJECTED',

	UPDATE_NOTIFICATION_PREFERENCES: '[users] UPDATE_NOTIFICATION_PREFERENCES',
	UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE: '[users] UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE',
	UPDATE_NOTIFICATION_PREFERENCES_LOADING: '[users] UPDATE_NOTIFICATION_PREFERENCES_LOADING',
	UPDATE_NOTIFICATION_PREFERENCES_FULFILLED: '[users] UPDATE_NOTIFICATION_PREFERENCES_FULFILLED',
	UPDATE_NOTIFICATION_PREFERENCES_REJECTED: '[users] UPDATE_NOTIFICATION_PREFERENCES_REJECTED',
}

export const userActions = {
	...types,
	updatePassword: (id: string, payload: UpdatePasswordRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_PASSWORD,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updatePasswordInitialState: () => ({
		type: types.UPDATE_PASSWORD_INITIAL_STATE,
		payload: null,
	}),
	updatePasswordLoading: () => ({
		type: types.UPDATE_PASSWORD_LOADING,
		payload: null,
	}),
	updatePasswordFulfilled: (payload) => ({
		type: types.UPDATE_PASSWORD_FULFILLED,
		payload,
	}),
	updatePasswordRejected: (payload: Error) => ({
		type: types.UPDATE_PASSWORD_REJECTED,
		payload,
	}),

	confirmEmail: (token: string, successCb?, errorCb?) => ({
		type: types.CONFIRM_EMAIL,
		payload: null,
		token,
		successCb,
		errorCb,
	}),
	confirmEmailInitialState: () => ({
		type: types.CONFIRM_EMAIL_INITIAL_STATE,
		payload: null,
	}),
	confirmEmailLoading: () => ({
		type: types.CONFIRM_EMAIL_LOADING,
		payload: null,
	}),
	confirmEmailFulfilled: () => ({
		type: types.CONFIRM_EMAIL_FULFILLED,
		payload: null,
	}),
	confirmEmailRejected: (payload: Error) => ({
		type: types.CONFIRM_EMAIL_REJECTED,
		payload,
	}),

	resendEmailConfirmation: (payload) => ({
		type: types.RESEND_EMAIL_CONFIRMATION,
		payload: payload,
	}),
	resendEmailConfirmationInitialState: () => ({
		type: types.RESEND_EMAIL_CONFIRMATION_INITIAL_STATE,
		payload: null,
	}),
	resendEmailConfirmationLoading: () => ({
		type: types.RESEND_EMAIL_CONFIRMATION_LOADING,
		payload: null,
	}),
	resendEmailConfirmationFulfilled: (response) => ({
		type: types.RESEND_EMAIL_CONFIRMATION_FULFILLED,
		payload: response,
	}),
	resendEmailConfirmationRejected: (payload: Error) => ({
		type: types.RESEND_EMAIL_CONFIRMATION_REJECTED,
		payload,
	}),

	getNotificationPreferences: (id: string, payload) => ({
		type: types.GET_NOTIFICATION_PREFERENCES,
		payload,
		id,
	}),
	getNotificationPreferencesInitialState: () => ({
		type: types.GET_NOTIFICATION_PREFERENCES_INITIAL_STATE,
		payload: null,
	}),
	getNotificationPreferencesLoading: () => ({
		type: types.GET_NOTIFICATION_PREFERENCES_LOADING,
		payload: null,
	}),
	getNotificationPreferencesFulfilled: (payload: NotificationPreference) => ({
		type: types.GET_NOTIFICATION_PREFERENCES_FULFILLED,
		payload,
	}),
	getNotificationPreferencesRejected: (payload: Error) => ({
		type: types.GET_NOTIFICATION_PREFERENCES_REJECTED,
		payload,
	}),

	updateNotificationPreferences: (id: string, payload: UpdateNotificationPreferencesRequest) => ({
		type: types.UPDATE_NOTIFICATION_PREFERENCES,
		payload,
		id,
	}),
	updateNotificationPreferencesInitialState: () => ({
		type: types.UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE,
		payload: null,
	}),
	updateNotificationPreferencesLoading: () => ({
		type: types.UPDATE_NOTIFICATION_PREFERENCES_LOADING,
		payload: null,
	}),
	updateNotificationPreferencesFulfilled: (payload: NotificationPreference) => ({
		type: types.UPDATE_NOTIFICATION_PREFERENCES_FULFILLED,
		payload,
	}),
	updateNotificationPreferencesRejected: (payload: Error) => ({
		type: types.UPDATE_NOTIFICATION_PREFERENCES_REJECTED,
		payload,
	}),
}
