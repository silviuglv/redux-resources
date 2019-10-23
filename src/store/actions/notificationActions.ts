import {
	Error,
	GetNotificationsRequest,
	Notification,
	PaginatedApiResponse,
	UpdateNotificationRequest,
} from '../../types'

const types = {
	GET_NOTIFICATIONS: '[cards] GET_NOTIFICATIONS',
	GET_NOTIFICATIONS_INITIAL_STATE: '[cards] GET_NOTIFICATIONS_INITIAL_STATE',
	GET_NOTIFICATIONS_LOADING: '[cards] GET_NOTIFICATIONS_LOADING',
	GET_NOTIFICATIONS_FULFILLED: '[cards] GET_NOTIFICATIONS_FULFILLED',
	GET_NOTIFICATIONS_REJECTED: '[cards] GET_NOTIFICATIONS_REJECTED',

	GET_TOTAL_UNREAD_NOTIFICATIONS: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS',
	GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE',
	GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING',
	GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED',
	GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED',

	UPDATE_NOTIFICATION: '[cards] UPDATE_NOTIFICATION',
	UPDATE_NOTIFICATION_INITIAL_STATE: '[cards] UPDATE_NOTIFICATION_INITIAL_STATE',
	UPDATE_NOTIFICATION_LOADING: '[cards] UPDATE_NOTIFICATION_LOADING',
	UPDATE_NOTIFICATION_FULFILLED: '[cards] UPDATE_NOTIFICATION_FULFILLED',
	UPDATE_NOTIFICATION_REJECTED: '[cards] UPDATE_NOTIFICATION_REJECTED',

	DELETE_NOTIFICATION: '[cards] DELETE_NOTIFICATION',
	DELETE_NOTIFICATION_INITIAL_STATE: '[cards] DELETE_NOTIFICATION_INITIAL_STATE',
	DELETE_NOTIFICATION_LOADING: '[cards] DELETE_NOTIFICATION_LOADING',
	DELETE_NOTIFICATION_FULFILLED: '[cards] DELETE_NOTIFICATION_FULFILLED',
	DELETE_NOTIFICATION_REJECTED: '[cards] DELETE_NOTIFICATION_REJECTED',

	ADD_NOTIFICATION_TO_LIST: '[cards] ADD_NOTIFICATION_TO_LIST',

	DISPLAY_SNACKBAR_MESSAGE: '[cards] DISPLAY_SNACKBAR_MESSAGE',
	HANDLE_SNACKBAR_CLOSE: '[cards] HANDLE_SNACKBAR_CLOSE',

	USER_CONFIRMED_EMAIL_EVENT: '[cards] USER_CONFIRMED_EMAIL_EVENT',
	USER_UPDATED_EMAIL_EVENT: '[cards] USER_UPDATED_EMAIL_EVENT',
	NOTIFICATION_RECEIVED_EVENT: '[cards] NOTIFICATION_RECEIVED_EVENT',

	CONNECT_TO_NOTIFICATION_SERVICE: '[cards] CONNECT_TO_NOTIFICATION_SERVICE',
	CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE',
	CONNECT_TO_NOTIFICATION_SERVICE_LOADING: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_LOADING',
	CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED',
	CONNECT_TO_NOTIFICATION_SERVICE_REJECTED: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_REJECTED',

	DISCONNECT_FROM_NOTIFICATION_SERVICE: '[cards] DISCONNECT_FROM_NOTIFICATION_SERVICE',

	SUBSCRIBE_TO_USER_EVENTS: '[cards] SUBSCRIBE_TO_USER_EVENTS',
	SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE: '[cards] SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE',
	SUBSCRIBE_TO_USER_EVENTS_LOADING: '[cards] SUBSCRIBE_TO_USER_EVENTS_LOADING',
	SUBSCRIBE_TO_USER_EVENTS_FULFILLED: '[cards] SUBSCRIBE_TO_USER_EVENTS_FULFILLED',
	SUBSCRIBE_TO_USER_EVENTS_REJECTED: '[cards] SUBSCRIBE_TO_USER_EVENTS_REJECTED',
}

export const notificationActions = {
	...types,
	getNotifications: (payload: GetNotificationsRequest) => ({
		type: types.GET_NOTIFICATIONS,
		payload,
	}),
	getNotificationsInitialState: () => ({
		type: types.GET_NOTIFICATIONS_INITIAL_STATE,
		payload: null,
	}),
	getNotificationsLoading: () => ({
		type: types.GET_NOTIFICATIONS_LOADING,
		payload: null,
	}),
	getNotificationsFulfilled: (payload: PaginatedApiResponse<Notification>) => ({
		type: types.GET_NOTIFICATIONS_FULFILLED,
		payload,
	}),
	getNotificationsRejected: (payload: Error) => ({
		type: types.GET_NOTIFICATIONS_REJECTED,
		payload,
	}),

	getTotalUnreadNotifications: () => ({
		type: types.GET_TOTAL_UNREAD_NOTIFICATIONS,
		payload: null,
	}),
	getTotalUnreadNotificationsInitialState: () => ({
		type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE,
		payload: null,
	}),
	getTotalUnreadNotificationsLoading: () => ({
		type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING,
		payload: null,
	}),
	getTotalUnreadNotificationsFulfilled: (payload: PaginatedApiResponse<Notification>) => ({
		type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED,
		payload,
	}),
	getTotalUnreadNotificationsRejected: (payload: Error) => ({
		type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED,
		payload,
	}),

	updateNotification: (id: string, payload: UpdateNotificationRequest) => ({
		type: types.UPDATE_NOTIFICATION,
		payload,
		id,
	}),
	updateNotificationInitialState: () => ({
		type: types.UPDATE_NOTIFICATION_INITIAL_STATE,
		payload: null,
	}),
	updateNotificationLoading: () => ({
		type: types.UPDATE_NOTIFICATION_LOADING,
		payload: null,
	}),
	updateNotificationFulfilled: (payload: Notification) => ({
		type: types.UPDATE_NOTIFICATION_FULFILLED,
		payload,
	}),
	updateNotificationRejected: (payload: Error) => ({
		type: types.UPDATE_NOTIFICATION_REJECTED,
		payload,
	}),

	deleteNotification: (payload) => ({
		type: types.DELETE_NOTIFICATION,
		payload,
	}),
	deleteNotificationInitialState: () => ({
		type: types.DELETE_NOTIFICATION_INITIAL_STATE,
		payload: null,
	}),
	deleteNotificationLoading: () => ({
		type: types.DELETE_NOTIFICATION_LOADING,
		payload: null,
	}),
	deleteNotificationFulfilled: () => ({
		type: types.DELETE_NOTIFICATION_FULFILLED,
		payload: null,
	}),
	deleteNotificationRejected: (payload) => ({
		type: types.DELETE_NOTIFICATION_REJECTED,
		payload,
	}),

	notificationReceivedEvent: (payload) => ({
		type: types.NOTIFICATION_RECEIVED_EVENT,
		payload,
	}),

	addNotificationToList: (payload) => ({
		type: types.ADD_NOTIFICATION_TO_LIST,
		payload,
	}),

	handleSnackbarClose: () => ({
		type: types.HANDLE_SNACKBAR_CLOSE,
	}),
	displaySnackbarMessage: (message: string, autoHideDuration = 3000) => ({
		type: types.DISPLAY_SNACKBAR_MESSAGE,
		payload: null,
		message,
		autoHideDuration,
	}),

	userConfirmedEmailEvent: (payload) => ({
		type: types.USER_CONFIRMED_EMAIL_EVENT,
		payload,
	}),
	userUpdatedEmailEvent: (payload) => ({
		type: types.USER_UPDATED_EMAIL_EVENT,
		payload,
	}),

	subscribeToUserEvents: () => ({
		type: types.SUBSCRIBE_TO_USER_EVENTS,
		payload: null,
	}),
	subscribeToUserEventsInitialState: () => ({
		type: types.SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE,
		payload: null,
	}),
	subscribeToUserEventsLoading: () => ({
		type: types.SUBSCRIBE_TO_USER_EVENTS_LOADING,
		payload: null,
	}),
	subscribeToUserEventsFulfilled: () => ({
		type: types.SUBSCRIBE_TO_USER_EVENTS_FULFILLED,
		payload: null,
	}),
	subscribeToUserEventsRejected: (payload: Error) => ({
		type: types.SUBSCRIBE_TO_USER_EVENTS_REJECTED,
		payload,
	}),

	connectToNotificationService: () => ({
		type: types.CONNECT_TO_NOTIFICATION_SERVICE,
		payload: null,
	}),
	connectToNotificationServiceInitialState: () => ({
		type: types.CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	connectToNotificationServiceLoading: () => ({
		type: types.CONNECT_TO_NOTIFICATION_SERVICE_LOADING,
		payload: null,
	}),
	connectToNotificationServiceFulfilled: () => ({
		type: types.CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED,
		payload: null,
	}),
	connectToNotificationServiceRejected: (payload: Error) => ({
		type: types.CONNECT_TO_NOTIFICATION_SERVICE_REJECTED,
		payload,
	}),

	disconnectFromNotificationService: () => ({
		type: types.DISCONNECT_FROM_NOTIFICATION_SERVICE,
		payload: null,
	}),
}
