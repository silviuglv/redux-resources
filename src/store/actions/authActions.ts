import {
	AccessToken,
	CreateUserFromAccountInviteRequest,
	CreateUserRequest,
	Error,
	ProviderTypes,
	UpdateUserRequest,
	User,
	UserMeta,
} from '../../types'

const types = {
	LOG_USER_IN: '[auth] LOG_USER_IN',
	LOG_USER_OUT: '[auth] LOG_USER_OUT',

	CREATE_SOCIAL_ACCESS_TOKEN: '[auth] CREATE_SOCIAL_ACCESS_TOKEN',

	CREATE_USER: '[auth] CREATE_USER',
	CREATE_USER_INITIAL_STATE: '[auth] CREATE_USER_INITIAL_STATE',
	CREATE_USER_LOADING: '[auth] CREATE_USER_LOADING',
	CREATE_USER_FULFILLED: '[auth] CREATE_USER_FULFILLED',
	CREATE_USER_REJECTED: '[auth] CREATE_USER_REJECTED',

	CREATE_USER_FROM_ACCOUNT_INVITE: '[auth] CREATE_USER_FROM_ACCOUNT_INVITE',
	CREATE_USER_FROM_ACCOUNT_INVITE_INITIAL_STATE: '[auth] CREATE_USER_FROM_ACCOUNT_INVITE_INITIAL_STATE',
	CREATE_USER_FROM_ACCOUNT_INVITE_LOADING: '[auth] CREATE_USER_FROM_ACCOUNT_INVITE_LOADING',
	CREATE_USER_FROM_ACCOUNT_INVITE_FULFILLED: '[auth] CREATE_USER_FROM_ACCOUNT_INVITE_FULFILLED',
	CREATE_USER_FROM_ACCOUNT_INVITE_REJECTED: '[auth] CREATE_USER_FROM_ACCOUNT_INVITE_REJECTED',

	CREATE_AUTH_ACCESS_TOKEN: '[auth] CREATE_AUTH_ACCESS_TOKEN',
	CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE: '[auth] CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE',
	CREATE_AUTH_ACCESS_TOKEN_LOADING: '[auth] CREATE_AUTH_ACCESS_TOKEN_LOADING',
	CREATE_AUTH_ACCESS_TOKEN_FULFILLED: '[auth] CREATE_AUTH_ACCESS_TOKEN_FULFILLED',
	CREATE_AUTH_ACCESS_TOKEN_REJECTED: '[auth] CREATE_AUTH_ACCESS_TOKEN_REJECTED',

	LOAD_AUTH_USER_META: '[auth] LOAD_AUTH_USER_META',
	LOAD_AUTH_USER_META_INITIAL_STATE: '[auth] LOAD_AUTH_USER_META_INITIAL_STATE',
	LOAD_AUTH_USER_META_LOADING: '[auth] LOAD_AUTH_USER_META_LOADING',
	LOAD_AUTH_USER_META_FULFILLED: '[auth] LOAD_AUTH_USER_META_FULFILLED',
	LOAD_AUTH_USER_META_REJECTED: '[auth] LOAD_AUTH_USER_META_REJECTED',

	UPDATE_AUTH_USER: '[auth] UPDATE_AUTH_USER',
	UPDATE_AUTH_USER_INITIAL_STATE: '[auth] UPDATE_AUTH_USER_INITIAL_STATE',
	UPDATE_AUTH_USER_LOADING: '[auth] UPDATE_AUTH_USER_LOADING',
	UPDATE_AUTH_USER_FULFILLED: '[auth] UPDATE_AUTH_USER_FULFILLED',
	UPDATE_AUTH_USER_REJECTED: '[auth] UPDATE_AUTH_USER_REJECTED',

	AUTH_USER_LOADING: '[auth] AUTH_USER_LOADING',
	AUTH_USER_LOADED: '[auth] AUTH_USER_LOADED',
	AUTH_USER_NOT_LOADED: '[auth] AUTH_USER_NOT_LOADED',
	AUTH_USER_DATA: '[auth] AUTH_USER_DATA',
	AUTH_USER_ERROR: '[auth] AUTH_USER_ERROR',
	AUTH_USER_INITIAL_STATE: '[auth] AUTH_USER_INITIAL_STATE',

	UPDATE_AUTH_PHOTO: '[auth] UPDATE_AUTH_PHOTO',
	UPDATE_AUTH_PHOTO_INITIAL_STATE: '[auth] UPDATE_AUTH_PHOTO_INITIAL_STATE',
	UPDATE_AUTH_PHOTO_LOADING: '[auth] UPDATE_AUTH_PHOTO_LOADING',
	UPDATE_AUTH_PHOTO_FULFILLED: '[auth] UPDATE_AUTH_PHOTO_FULFILLED',
	UPDATE_AUTH_PHOTO_REJECTED: '[auth] UPDATE_AUTH_PHOTO_REJECTED',
}

export const authActions = {
	...types,
	authUserInitialState: () => ({
		type: types.AUTH_USER_INITIAL_STATE,
		payload: null,
	}),
	authUserLoading: () => ({
		type: types.AUTH_USER_LOADING,
		payload: null,
	}),
	authUserLoaded: () => ({
		type: types.AUTH_USER_LOADED,
		payload: null,
	}),
	authUserNotLoaded: () => ({
		type: types.AUTH_USER_NOT_LOADED,
		payload: null,
	}),
	authUserData: (payload) => ({
		type: types.AUTH_USER_DATA,
		payload,
	}),
	authUserError: (payload: Error) => ({
		type: types.AUTH_USER_ERROR,
		payload,
	}),
	handleLogin: (payload) => ({
		type: types.LOG_USER_IN,
		payload,
	}),
	logUserOut: (successCb?) => ({
		type: types.LOG_USER_OUT,
		payload: null,
		successCb,
	}),
	createSocialAccessToken: (provider: ProviderTypes, access_token: string, token_secret: string) => ({
		type: types.CREATE_SOCIAL_ACCESS_TOKEN,
		payload: null,
		provider,
		access_token,
		token_secret,
	}),

	createUser: (payload: CreateUserRequest, successCb?, errorCb?) => ({
		type: types.CREATE_USER,
		payload,
		successCb, 
		errorCb
	}),
	createUserInitialState: () => ({
		type: types.CREATE_USER_INITIAL_STATE,
		payload: null,
	}),
	createUserLoading: () => ({
		type: types.CREATE_USER_LOADING,
		payload: null,
	}),
	createUserFulfilled: (payload: User) => ({
		type: types.CREATE_USER_FULFILLED,
		payload,
	}),
	createUserRejected: (payload: Error) => ({
		type: types.CREATE_USER_REJECTED,
		payload,
	}),

	createUserFromAccountInvite: (payload: CreateUserFromAccountInviteRequest) => ({
		type: types.CREATE_USER_FROM_ACCOUNT_INVITE,
		payload,
	}),
	createUserFromAccountInviteInitialState: () => ({
		type: types.CREATE_USER_FROM_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	createUserFromAccountInviteLoading: () => ({
		type: types.CREATE_USER_FROM_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	createUserFromAccountInviteFulfilled: (payload: User) => ({
		type: types.CREATE_USER_FROM_ACCOUNT_INVITE_FULFILLED,
		payload,
	}),
	createUserFromAccountInviteRejected: (payload: Error) => ({
		type: types.CREATE_USER_FROM_ACCOUNT_INVITE_REJECTED,
		payload,
	}),

	createAccessToken: () => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN,
		payload: null,
	}),
	createAccessTokenInitialState: () => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE,
		payload: null,
	}),
	createAccessTokenLoading: () => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_LOADING,
		payload: null,
	}),
	createAccessTokenFulfilled: (payload: AccessToken) => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_FULFILLED,
		payload,
	}),
	createAccessTokenRejected: (payload: Error) => ({
		type: types.CREATE_AUTH_ACCESS_TOKEN_REJECTED,
		payload,
	}),

	authMeta: () => ({
		type: types.LOAD_AUTH_USER_META,
		payload: null,
	}),
	authMetaInitialState: () => ({
		type: types.LOAD_AUTH_USER_META_INITIAL_STATE,
		payload: null,
	}),
	authMetaLoading: () => ({
		type: types.LOAD_AUTH_USER_META_LOADING,
		payload: null,
	}),
	authMetaFulfilled: (payload: UserMeta) => ({
		type: types.LOAD_AUTH_USER_META_FULFILLED,
		payload,
	}),
	authMetaRejected: (payload: Error) => ({
		type: types.LOAD_AUTH_USER_META_REJECTED,
		payload,
	}),

	updateAuthUser: (id, payload: UpdateUserRequest) => ({
		type: types.UPDATE_AUTH_USER,
		payload,
		id,
	}),
	updateAuthUserInitialState: () => ({
		type: types.UPDATE_AUTH_USER_INITIAL_STATE,
		payload: null,
	}),
	updateAuthUserLoading: () => ({
		type: types.UPDATE_AUTH_USER_LOADING,
		payload: null,
	}),
	updateAuthUserFulfilled: (payload: User) => ({
		type: types.UPDATE_AUTH_USER_FULFILLED,
		payload,
	}),
	updateAuthUserRejected: (payload: Error) => ({
		type: types.UPDATE_AUTH_USER_REJECTED,
		payload,
	}),

	updateAuthPhoto: (id: string, payload: any, successCb?, errorCb?) => ({
		type: types.UPDATE_AUTH_PHOTO,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updateAuthPhotoInitialState: () => ({
		type: types.UPDATE_AUTH_PHOTO_INITIAL_STATE,
		payload: null,
	}),
	updateAuthPhotoLoading: () => ({
		type: types.UPDATE_AUTH_PHOTO_LOADING,
		payload: null,
	}),
	updateAuthPhotoFulfilled: (payload) => ({
		type: types.UPDATE_AUTH_PHOTO_FULFILLED,
		payload,
	}),
	updateAuthPhotoRejected: (payload: Error) => ({
		type: types.UPDATE_AUTH_PHOTO_REJECTED,
		payload,
	}),
}
