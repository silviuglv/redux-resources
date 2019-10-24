import {
	Account,
	Error,
	UpdateAccountRequest,
	PaginatedApiResponse,
	User,
	GetAccountUsersRequest,
	GetAccountsRequest,
	CreateAccountRequest,
	Invoice,
} from '../../types'

const types = {
	SHOW_ACCOUNT: '[accounts] SHOW_ACCOUNT',
	SHOW_ACCOUNT_INITIAL_STATE: '[accounts] SHOW_ACCOUNT_INITIAL_STATE',
	SHOW_ACCOUNT_LOADING: '[accounts] SHOW_ACCOUNT_LOADING',
	SHOW_ACCOUNT_FULFILLED: '[accounts] SHOW_ACCOUNT_FULFILLED',
	SHOW_ACCOUNT_REJECTED: '[accounts] SHOW_ACCOUNT_REJECTED',

	UPDATE_ACCOUNT: '[accounts] UPDATE_ACCOUNT',
	UPDATE_ACCOUNT_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_INITIAL_STATE',
	UPDATE_ACCOUNT_LOADING: '[accounts] UPDATE_ACCOUNT_LOADING',
	UPDATE_ACCOUNT_FULFILLED: '[accounts] UPDATE_ACCOUNT_FULFILLED',
	UPDATE_ACCOUNT_REJECTED: '[accounts] UPDATE_ACCOUNT_REJECTED',

	LOAD_ACCOUNTS: '[accounts] LOAD_ACCOUNTS',
	LOAD_ACCOUNTS_INITIAL_STATE: '[accounts] LOAD_ACCOUNTS_INITIAL_STATE',
	LOAD_ACCOUNTS_LOADING: '[accounts] LOAD_ACCOUNTS_LOADING',
	LOAD_ACCOUNTS_FULFILLED: '[accounts] LOAD_ACCOUNTS_FULFILLED',
	LOAD_ACCOUNTS_REJECTED: '[accounts] LOAD_ACCOUNTS_REJECTED',

	LOAD_ACCOUNT_USERS: '[accounts] LOAD_ACCOUNT_USERS',
	LOAD_ACCOUNT_USERS_INITIAL_STATE: '[accounts] LOAD_ACCOUNT_USERS_INITIAL_STATE',
	LOAD_ACCOUNT_USERS_LOADING: '[accounts] LOAD_ACCOUNT_USERS_LOADING',
	LOAD_ACCOUNT_USERS_FULFILLED: '[accounts] LOAD_ACCOUNT_USERS_FULFILLED',
	LOAD_ACCOUNT_USERS_REJECTED: '[accounts] LOAD_ACCOUNT_USERS_REJECTED',

	LOAD_DEFAULT_ACCOUNT: '[accounts] LOAD_DEFAULT_ACCOUNT',
	LOAD_DEFAULT_ACCOUNT_INITIAL_STATE: '[accounts] LOAD_DEFAULT_ACCOUNT_INITIAL_STATE',
	LOAD_DEFAULT_ACCOUNT_LOADING: '[accounts] LOAD_DEFAULT_ACCOUNT_LOADING',
	LOAD_DEFAULT_ACCOUNT_FULFILLED: '[accounts] LOAD_DEFAULT_ACCOUNT_FULFILLED',
	LOAD_DEFAULT_ACCOUNT_REJECTED: '[accounts] LOAD_DEFAULT_ACCOUNT_REJECTED',

	SET_DEFAULT_ACCOUNT: '[accounts] SET_DEFAULT_ACCOUNT',
	SET_DEFAULT_ACCOUNT_INITIAL_STATE: '[accounts] SET_DEFAULT_ACCOUNT_INITIAL_STATE',
	SET_DEFAULT_ACCOUNT_LOADING: '[accounts] SET_DEFAULT_ACCOUNT_LOADING',
	SET_DEFAULT_ACCOUNT_FULFILLED: '[accounts] SET_DEFAULT_ACCOUNT_FULFILLED',
	SET_DEFAULT_ACCOUNT_REJECTED: '[accounts] SET_DEFAULT_ACCOUNT_REJECTED',

	CREATE_ACCOUNT: '[accounts] CREATE_ACCOUNT',
	CREATE_ACCOUNT_INITIAL_STATE: '[accounts] CREATE_ACCOUNT_INITIAL_STATE',
	CREATE_ACCOUNT_LOADING: '[accounts] CREATE_ACCOUNT_LOADING',
	CREATE_ACCOUNT_FULFILLED: '[accounts] CREATE_ACCOUNT_FULFILLED',
	CREATE_ACCOUNT_REJECTED: '[accounts] CREATE_ACCOUNT_REJECTED',

	DELETE_ACCOUNT_MEMBER: '[accounts] DELETE_ACCOUNT_MEMBER',
	DELETE_ACCOUNT_MEMBER_INITIAL_STATE: '[accounts] DELETE_ACCOUNT_MEMBER_INITIAL_STATE',
	DELETE_ACCOUNT_MEMBER_LOADING: '[accounts] DELETE_ACCOUNT_MEMBER_LOADING',
	DELETE_ACCOUNT_MEMBER_FULFILLED: '[accounts] DELETE_ACCOUNT_MEMBER_FULFILLED',
	DELETE_ACCOUNT_MEMBER_REJECTED: '[accounts] DELETE_ACCOUNT_MEMBER_REJECTED',

	UPDATE_ACCOUNT_MEMBER: '[accounts] UPDATE_ACCOUNT_MEMBER',
	UPDATE_ACCOUNT_MEMBER_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_MEMBER_INITIAL_STATE',
	UPDATE_ACCOUNT_MEMBER_LOADING: '[accounts] UPDATE_ACCOUNT_MEMBER_LOADING',
	UPDATE_ACCOUNT_MEMBER_FULFILLED: '[accounts] UPDATE_ACCOUNT_MEMBER_FULFILLED',
	UPDATE_ACCOUNT_MEMBER_REJECTED: '[accounts] UPDATE_ACCOUNT_MEMBER_REJECTED',

	UPDATE_ACCOUNT_PHOTO: '[accounts] UPDATE_ACCOUNT_PHOTO',
	UPDATE_ACCOUNT_PHOTO_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_PHOTO_INITIAL_STATE',
	UPDATE_ACCOUNT_PHOTO_LOADING: '[accounts] UPDATE_ACCOUNT_PHOTO_LOADING',
	UPDATE_ACCOUNT_PHOTO_FULFILLED: '[accounts] UPDATE_ACCOUNT_PHOTO_FULFILLED',
	UPDATE_ACCOUNT_PHOTO_REJECTED: '[accounts] UPDATE_ACCOUNT_PHOTO_REJECTED',

	GET_INVOICES: '[accounts] GET_INVOICES',
	GET_INVOICES_INITIAL_STATE: '[accounts] GET_INVOICES_INITIAL_STATE',
	GET_INVOICES_LOADING: '[accounts] GET_INVOICES_LOADING',
	GET_INVOICES_FULFILLED: '[accounts] GET_INVOICES_FULFILLED',
	GET_INVOICES_REJECTED: '[accounts] GET_INVOICES_REJECTED',
}

export const accountActions = {
	...types,
	showAccount: (id: string) => ({
		type: types.SHOW_ACCOUNT,
		payload: null,
		id,
	}),
	showAccountInitialState: () => ({
		type: types.SHOW_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	showAccountLoading: () => ({
		type: types.SHOW_ACCOUNT_LOADING,
		payload: null,
	}),
	showAccountFulfilled: (payload: Account) => ({
		type: types.SHOW_ACCOUNT_FULFILLED,
		payload,
	}),
	showAccountRejected: (payload: Error) => ({
		type: types.SHOW_ACCOUNT_REJECTED,
		payload,
	}),

	updateAccount: (account: Account, payload: UpdateAccountRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_ACCOUNT,
		payload,
		account,
		successCb,
		errorCb,
	}),
	updateAccountInitialState: () => ({
		type: types.UPDATE_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	updateAccountLoading: () => ({
		type: types.UPDATE_ACCOUNT_LOADING,
		payload: null,
	}),
	updateAccountFulfilled: (payload: Account) => ({
		type: types.UPDATE_ACCOUNT_FULFILLED,
		payload,
	}),
	updateAccountRejected: (payload: Error) => ({
		type: types.UPDATE_ACCOUNT_REJECTED,
		payload,
	}),

	accountUsers: (id: string, payload: GetAccountUsersRequest = {}) => ({
		type: types.LOAD_ACCOUNT_USERS,
		payload,
		id,
	}),
	accountUsersInitialState: () => ({
		type: types.LOAD_ACCOUNT_USERS_INITIAL_STATE,
		payload: null,
	}),
	accountUsersLoading: () => ({
		type: types.LOAD_ACCOUNT_USERS_LOADING,
		payload: null,
	}),
	accountUsersFulfilled: (payload: PaginatedApiResponse<User>) => ({
		type: types.LOAD_ACCOUNT_USERS_FULFILLED,
		payload,
	}),
	accountUsersRejected: (payload: Error) => ({
		type: types.LOAD_ACCOUNT_USERS_REJECTED,
		payload,
	}),

	accounts: (payload: GetAccountsRequest = {}) => ({
		type: types.LOAD_ACCOUNTS,
		payload,
	}),
	accountsInitialState: () => ({
		type: types.LOAD_ACCOUNTS_INITIAL_STATE,
		payload: null,
	}),
	accountsLoading: () => ({
		type: types.LOAD_ACCOUNTS_LOADING,
		payload: null,
	}),
	accountsFulfilled: (payload: PaginatedApiResponse<User>) => ({
		type: types.LOAD_ACCOUNTS_FULFILLED,
		payload,
	}),
	accountsRejected: (payload: Error) => ({
		type: types.LOAD_ACCOUNTS_REJECTED,
		payload,
	}),

	getDefaultAccount: () => ({
		type: types.LOAD_DEFAULT_ACCOUNT,
		payload: null,
	}),
	getDefaultAccountInitialState: () => ({
		type: types.LOAD_DEFAULT_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	getDefaultAccountLoading: () => ({
		type: types.LOAD_DEFAULT_ACCOUNT_LOADING,
		payload: null,
	}),
	getDefaultAccountFulfilled: (payload: Account) => ({
		type: types.LOAD_DEFAULT_ACCOUNT_FULFILLED,
		payload,
	}),
	getDefaultAccountRejected: (payload: Error) => ({
		type: types.LOAD_DEFAULT_ACCOUNT_REJECTED,
		payload,
	}),

	setDefaultAccount: (id: string) => ({
		type: types.SET_DEFAULT_ACCOUNT,
		payload: null,
		id,
	}),
	setDefaultAccountInitialState: () => ({
		type: types.SET_DEFAULT_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	setDefaultAccountLoading: () => ({
		type: types.SET_DEFAULT_ACCOUNT_LOADING,
		payload: null,
	}),
	setDefaultAccountFulfilled: (payload: Account) => ({
		type: types.SET_DEFAULT_ACCOUNT_FULFILLED,
		payload,
	}),
	setDefaultAccountRejected: (payload: Error) => ({
		type: types.SET_DEFAULT_ACCOUNT_REJECTED,
		payload,
	}),

	createAccount: (payload: CreateAccountRequest, successCb?, errorCb?) => ({
		type: types.CREATE_ACCOUNT,
		payload,
		successCb,
		errorCb,
	}),
	createAccountInitialState: () => ({
		type: types.CREATE_ACCOUNT_INITIAL_STATE,
		payload: null,
	}),
	createAccountLoading: () => ({
		type: types.CREATE_ACCOUNT_LOADING,
		payload: null,
	}),
	createAccountFulfilled: (payload: Account) => ({
		type: types.CREATE_ACCOUNT_FULFILLED,
		payload,
	}),
	createAccountRejected: (payload: Error) => ({
		type: types.CREATE_ACCOUNT_REJECTED,
		payload,
	}),

	deleteAccountMember: (account: Account, member: User, successCb?, errorCb?) => ({
		type: types.DELETE_ACCOUNT_MEMBER,
		payload: null,
		account,
		member,
		successCb,
		errorCb,
	}),
	deleteAccountMemberInitialState: () => ({
		type: types.DELETE_ACCOUNT_MEMBER_INITIAL_STATE,
		payload: null,
	}),
	deleteAccountMemberLoading: () => ({
		type: types.DELETE_ACCOUNT_MEMBER_LOADING,
		payload: null,
	}),
	deleteAccountMemberFulfilled: () => ({
		type: types.DELETE_ACCOUNT_MEMBER_FULFILLED,
		payload: null,
	}),
	deleteAccountMemberRejected: (payload: Error) => ({
		type: types.DELETE_ACCOUNT_MEMBER_REJECTED,
		payload,
	}),

	updateAccountMember: (account: Account, member: User, payload, successCb?, errorCb?) => ({
		type: types.UPDATE_ACCOUNT_MEMBER,
		payload,
		account,
		member,
		successCb,
		errorCb,
	}),
	updateAccountMemberInitialState: () => ({
		type: types.UPDATE_ACCOUNT_MEMBER_INITIAL_STATE,
		payload: null,
	}),
	updateAccountMemberLoading: () => ({
		type: types.UPDATE_ACCOUNT_MEMBER_LOADING,
		payload: null,
	}),
	updateAccountMemberFulfilled: (payload: User) => ({
		type: types.UPDATE_ACCOUNT_MEMBER_FULFILLED,
		payload,
	}),
	updateAccountMemberRejected: (payload: Error) => ({
		type: types.UPDATE_ACCOUNT_MEMBER_REJECTED,
		payload,
	}),

	updateAccountPhoto: (id: string, payload, successCb?, errorCb?) => ({
		type: types.UPDATE_ACCOUNT_PHOTO,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updateAccountPhotoInitialState: () => ({
		type: types.UPDATE_ACCOUNT_PHOTO_INITIAL_STATE,
		payload: null,
	}),
	updateAccountPhotoLoading: () => ({
		type: types.UPDATE_ACCOUNT_PHOTO_LOADING,
		payload: null,
	}),
	updateAccountPhotoFulfilled: (payload) => ({
		type: types.UPDATE_ACCOUNT_PHOTO_FULFILLED,
		payload,
	}),
	updateAccountPhotoRejected: (payload: Error) => ({
		type: types.UPDATE_ACCOUNT_PHOTO_REJECTED,
		payload,
	}),

	getInvoices: (account: Account) => ({
		type: types.GET_INVOICES,
		payload: null,
		account,
	}),
	getInvoicesInitialState: () => ({
		type: types.GET_INVOICES_INITIAL_STATE,
		payload: null,
	}),
	getInvoicesLoading: () => ({
		type: types.GET_INVOICES_LOADING,
		payload: null,
	}),
	getInvoicesFulfilled: (payload: PaginatedApiResponse<Invoice>) => ({
		type: types.GET_INVOICES_FULFILLED,
		payload,
	}),
	getInvoicesRejected: (payload: Error) => ({
		type: types.GET_INVOICES_REJECTED,
		payload,
	}),
}
