import {
	AccountInvite,
	CreateAccountInviteRequest,
	Error,
	GetAccountInvitesRequest,
	PaginatedApiResponse,
} from '../../types'

const types = {
	GET_MY_ACCOUNT_INVITES: '[account_invites] GET_MY_ACCOUNT_INVITES',
	GET_MY_ACCOUNT_INVITES_INITIAL_STATE: '[account_invites] GET_MY_ACCOUNT_INVITES_INITIAL_STATE',
	GET_MY_ACCOUNT_INVITES_LOADING: '[account_invites] GET_MY_ACCOUNT_INVITES_LOADING',
	GET_MY_ACCOUNT_INVITES_FULFILLED: '[account_invites] GET_MY_ACCOUNT_INVITES_FULFILLED',
	GET_MY_ACCOUNT_INVITES_REJECTED: '[account_invites] GET_MY_ACCOUNT_INVITES_REJECTED',
	GET_ACCOUNT_INVITES: '[account_invites] GET_ACCOUNT_INVITES',
	GET_ACCOUNT_INVITES_INITIAL_STATE: '[account_invites] GET_ACCOUNT_INVITES_INITIAL_STATE',
	GET_ACCOUNT_INVITES_LOADING: '[account_invites] GET_ACCOUNT_INVITES_LOADING',
	GET_ACCOUNT_INVITES_FULFILLED: '[account_invites] GET_ACCOUNT_INVITES_FULFILLED',
	GET_ACCOUNT_INVITES_REJECTED: '[account_invites] GET_ACCOUNT_INVITES_REJECTED',
	DELETE_MY_ACCOUNT_INVITE: '[account_invites] DELETE_MY_ACCOUNT_INVITE',
	DELETE_ACCOUNT_INVITE: '[account_invites] DELETE_ACCOUNT_INVITE',
	DELETE_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] DELETE_ACCOUNT_INVITE_INITIAL_STATE',
	DELETE_ACCOUNT_INVITE_LOADING: '[account_invites] DELETE_ACCOUNT_INVITE_LOADING',
	DELETE_ACCOUNT_INVITE_FULFILLED: '[account_invites] DELETE_ACCOUNT_INVITE_FULFILLED',
	DELETE_ACCOUNT_INVITE_REJECTED: '[account_invites] DELETE_ACCOUNT_INVITE_REJECTED',
	CREATE_ACCOUNT_INVITE: '[account_invites] CREATE_ACCOUNT_INVITE',
	CREATE_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] CREATE_ACCOUNT_INVITE_INITIAL_STATE',
	CREATE_ACCOUNT_INVITE_LOADING: '[account_invites] CREATE_ACCOUNT_INVITE_LOADING',
	CREATE_ACCOUNT_INVITE_FULFILLED: '[account_invites] CREATE_ACCOUNT_INVITE_FULFILLED',
	CREATE_ACCOUNT_INVITE_REJECTED: '[account_invites] CREATE_ACCOUNT_INVITE_REJECTED',
	ACCEPT_ACCOUNT_INVITE: '[account_invites] ACCEPT_ACCOUNT_INVITE',
	ACCEPT_ACCOUNT_INVITE_INITIAL_STATE: '[account_invites] ACCEPT_ACCOUNT_INVITE_INITIAL_STATE',
	ACCEPT_ACCOUNT_INVITE_LOADING: '[account_invites] ACCEPT_ACCOUNT_INVITE_LOADING',
	ACCEPT_ACCOUNT_INVITE_FULFILLED: '[account_invites] ACCEPT_ACCOUNT_INVITE_FULFILLED',
	ACCEPT_ACCOUNT_INVITE_REJECTED: '[account_invites] ACCEPT_ACCOUNT_INVITE_REJECTED',
}

export const accountInviteActions = {
	...types,
	getMyAccountInvites: (payload: GetAccountInvitesRequest = {}) => ({
		type: types.GET_MY_ACCOUNT_INVITES,
		payload,
	}),
	getMyAccountInvitesInitialState: () => ({
		type: types.GET_MY_ACCOUNT_INVITES_INITIAL_STATE,
		payload: null,
	}),
	getMyAccountInvitesLoading: () => ({
		type: types.GET_MY_ACCOUNT_INVITES_LOADING,
		payload: null,
	}),
	getMyAccountInvitesFulfilled: (payload: PaginatedApiResponse<AccountInvite>) => ({
		type: types.GET_MY_ACCOUNT_INVITES_FULFILLED,
		payload,
	}),
	getMyAccountInvitesRejected: (payload: Error) => ({
		type: types.GET_MY_ACCOUNT_INVITES_REJECTED,
		payload,
	}),

	getAccountInvites: (payload: GetAccountInvitesRequest = {}) => ({
		type: types.GET_ACCOUNT_INVITES,
		payload,
	}),
	accountInvitesInitialState: () => ({
		type: types.GET_ACCOUNT_INVITES_INITIAL_STATE,
		payload: null,
	}),
	accountInvitesLoading: () => ({
		type: types.GET_ACCOUNT_INVITES_LOADING,
		payload: null,
	}),
	accountInvitesFulfilled: (payload: PaginatedApiResponse<AccountInvite>) => ({
		type: types.GET_ACCOUNT_INVITES_FULFILLED,
		payload,
	}),
	accountInvitesRejected: (payload: Error) => ({
		type: types.GET_ACCOUNT_INVITES_REJECTED,
		payload,
	}),

	deleteMyAccountInvite: (payload: AccountInvite) => ({
		type: types.DELETE_MY_ACCOUNT_INVITE,
		payload,
	}),

	deleteAccountInvite: (payload: AccountInvite, successCb?, errorCb?) => ({
		type: types.DELETE_ACCOUNT_INVITE,
		payload,
		successCb,
		errorCb,
	}),
	deleteAccountInviteInitialState: () => ({
		type: types.DELETE_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	deleteAccountInviteLoading: () => ({
		type: types.DELETE_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	deleteAccountInviteFulfilled: (payload) => ({
		type: types.DELETE_ACCOUNT_INVITE_FULFILLED,
		payload,
	}),
	deleteAccountInviteRejected: (payload: Error) => ({
		type: types.DELETE_ACCOUNT_INVITE_REJECTED,
		payload,
	}),

	createAccountInvite: (payload: CreateAccountInviteRequest, successCb?, errorCb?) => ({
		type: types.CREATE_ACCOUNT_INVITE,
		payload,
		successCb,
		errorCb,
	}),
	createAccountInviteInitialState: () => ({
		type: types.CREATE_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	createAccountInviteLoading: () => ({
		type: types.CREATE_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	createAccountInviteFulfilled: (payload: AccountInvite) => ({
		type: types.CREATE_ACCOUNT_INVITE_FULFILLED,
		payload,
	}),
	createAccountInviteRejected: (payload: Error) => ({
		type: types.CREATE_ACCOUNT_INVITE_REJECTED,
		payload,
	}),

	acceptAccountInvite: (payload: AccountInvite) => ({
		type: types.ACCEPT_ACCOUNT_INVITE,
		payload,
	}),
	acceptAccountInviteInitialState: () => ({
		type: types.ACCEPT_ACCOUNT_INVITE_INITIAL_STATE,
		payload: null,
	}),
	acceptAccountInviteLoading: () => ({
		type: types.ACCEPT_ACCOUNT_INVITE_LOADING,
		payload: null,
	}),
	acceptAccountInviteFulfilled: (payload: AccountInvite) => ({
		type: types.ACCEPT_ACCOUNT_INVITE_FULFILLED,
		payload,
	}),
	acceptAccountInviteRejected: (payload: Error) => ({
		type: types.ACCEPT_ACCOUNT_INVITE_REJECTED,
		payload,
	}),
}
