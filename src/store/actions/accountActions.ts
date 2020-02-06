import {
	Account,
	Error,
	UpdateAccountRequest,
	PaginatedApiResponse,
	User,
	Customization,
	GetAccountUsersRequest,
	GetAccountsRequest,
	CreateAccountRequest,
	Invoice,
	GetAccountCustomizationsRequest,
	UpdateCustomizationRequest,
	CreateCustomizationRequest,
	GetCustomizationTypesRequest,
	CustomizationType,
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

	//BEGIN CUSTOMIZATIONS
	GET_CUSTOMIZATION_TYPES: '[accounts] GET_CUSTOMIZATION_TYPES',
	SET_CUSTOMIZATION_TYPES_LOADING: '[accounts] SET_CUSTOMIZATION_TYPES_LOADING',
	SET_CUSTOMIZATION_TYPES_FULFILLED: '[accounts] SET_CUSTOMIZATION_TYPES_FULFILLED',
	SET_CUSTOMIZATION_TYPES_REJECTED: '[accounts] SET_CUSTOMIZATION_TYPES_REJECTED',

	GET_ACCOUNT_CUSTOMIZATIONS: '[accounts] GET_ACCOUNT_CUSTOMIZATIONS',
	GET_ACCOUNT_CUSTOMIZATIONS_INITIAL_STATE: '[accounts] GET_ACCOUNT_CUSTOMIZATIONS_INITIAL_STATE',
	GET_ACCOUNT_CUSTOMIZATIONS_LOADING: '[accounts] GET_ACCOUNT_CUSTOMIZATIONS_LOADING',
	GET_ACCOUNT_CUSTOMIZATIONS_FULFILLED: '[accounts] GET_ACCOUNT_CUSTOMIZATIONS_FULFILLED',
	GET_ACCOUNT_CUSTOMIZATIONS_REJECTED: '[accounts] GET_ACCOUNT_CUSTOMIZATIONS_REJECTED',

	GET_CUSTOMIZATION_BY_TYPE: '[accounts] GET_CUSTOMIZATION_BY_TYPE',
	GET_CUSTOMIZATION_BY_TYPE_INITIAL_STATE: '[accounts] GET_CUSTOMIZATION_BY_TYPE_INITIAL_STATE',
	GET_CUSTOMIZATION_BY_TYPE_LOADING: '[accounts] GET_CUSTOMIZATION_BY_TYPE_LOADING',
	GET_CUSTOMIZATION_BY_TYPE_FULFILLED: '[accounts] GET_CUSTOMIZATION_BY_TYPE_FULFILLED',
	GET_CUSTOMIZATION_BY_TYPE_REJECTED: '[accounts] GET_CUSTOMIZATION_BY_TYPE_REJECTED',

	GET_CUSTOMIZATION: '[accounts] GET_CUSTOMIZATION',
	GET_CUSTOMIZATION_INITIAL_STATE: '[accounts] GET_CUSTOMIZATION_INITIAL_STATE',
	GET_CUSTOMIZATION_LOADING: '[accounts] GET_CUSTOMIZATION_LOADING',
	GET_CUSTOMIZATION_FULFILLED: '[accounts] GET_CUSTOMIZATION_FULFILLED',
	GET_CUSTOMIZATION_REJECTED: '[accounts] GET_CUSTOMIZATION_REJECTED',

	UPDATE_CUSTOMIZATION: '[accounts] UPDATE_CUSTOMIZATION',
	UPDATE_CUSTOMIZATION_INITIAL_STATE: '[accounts] UPDATE_CUSTOMIZATION_INITIAL_STATE',
	UPDATE_CUSTOMIZATION_LOADING: '[accounts] UPDATE_CUSTOMIZATION_LOADING',
	UPDATE_CUSTOMIZATION_FULFILLED: '[accounts] UPDATE_CUSTOMIZATION_FULFILLED',
	UPDATE_CUSTOMIZATION_REJECTED: '[accounts] UPDATE_CUSTOMIZATION_REJECTED',

	UPDATE_CUSTOMIZATION_BY_TYPE: '[accounts] UPDATE_CUSTOMIZATION_BY_TYPE',
	UPDATE_CUSTOMIZATION_BY_TYPE_INITIAL_STATE: '[accounts] UPDATE_CUSTOMIZATION_BY_TYPE_INITIAL_STATE',
	UPDATE_CUSTOMIZATION_BY_TYPE_LOADING: '[accounts] UPDATE_CUSTOMIZATION_BY_TYPE_LOADING',
	UPDATE_CUSTOMIZATION_BY_TYPE_FULFILLED: '[accounts] UPDATE_CUSTOMIZATION_BY_TYPE_FULFILLED',
	UPDATE_CUSTOMIZATION_BY_TYPE_REJECTED: '[accounts] UPDATE_CUSTOMIZATION_BY_TYPE_REJECTED',

	CREATE_CUSTOMIZATION: '[accounts] CREATE_CUSTOMIZATION',
	CREATE_CUSTOMIZATION_INITIAL_STATE: '[accounts] CREATE_CUSTOMIZATION_INITIAL_STATE',
	CREATE_CUSTOMIZATION_LOADING: '[accounts] CREATE_CUSTOMIZATION_LOADING',
	CREATE_CUSTOMIZATION_FULFILLED: '[accounts] CREATE_CUSTOMIZATION_FULFILLED',
	CREATE_CUSTOMIZATION_REJECTED: '[accounts] CREATE_CUSTOMIZATION_REJECTED',

	DELETE_CUSTOMIZATION: '[accounts] DELETE_CUSTOMIZATION',
	DELETE_CUSTOMIZATION_INITIAL_STATE: '[accounts] DELETE_CUSTOMIZATION_INITIAL_STATE',
	DELETE_CUSTOMIZATION_LOADING: '[accounts] DELETE_CUSTOMIZATION_LOADING',
	DELETE_CUSTOMIZATION_FULFILLED: '[accounts] DELETE_CUSTOMIZATION_FULFILLED',
	DELETE_CUSTOMIZATION_REJECTED: '[accounts] DELETE_CUSTOMIZATION_REJECTED',
	//END CUSTOMIZATIONS
	UPDATE_ACCOUNT_BANNER: '[accounts] UPDATE_ACCOUNT_BANNER',
	UPDATE_ACCOUNT_BANNER_INITIAL_STATE: '[accounts] UPDATE_ACCOUNT_BANNER_INITIAL_STATE',
	UPDATE_ACCOUNT_BANNER_LOADING: '[accounts] UPDATE_ACCOUNT_BANNER_LOADING',
	UPDATE_ACCOUNT_BANNER_FULFILLED: '[accounts] UPDATE_ACCOUNT_BANNER_FULFILLED',
	UPDATE_ACCOUNT_BANNER_REJECTED: '[accounts] UPDATE_ACCOUNT_BANNER_REJECTED',

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

	//GET_CUSTOMIZATION_TYPES
	getCustomizationTypes: (payload: GetCustomizationTypesRequest = {}) => ({
		type: types.GET_CUSTOMIZATION_TYPES,
		payload,
	}),
	setCustomizationTypesLoading: () => ({
		type: types.SET_CUSTOMIZATION_TYPES_LOADING,
		payload: null,
	}),
	setCustomizationTypesFulfilled: (payload: PaginatedApiResponse<CustomizationType>) => ({
		type: types.SET_CUSTOMIZATION_TYPES_FULFILLED,
		payload,
	}),
	setCustomizationTypesRejected: (payload: Error) => ({
		type: types.SET_CUSTOMIZATION_TYPES_REJECTED,
		payload,
	}),

	//GET_ACCOUNT_CUSTOMIZATIONS
	getAccountCustomizations: (account: Account, payload: GetAccountCustomizationsRequest) => ({
		type: types.GET_ACCOUNT_CUSTOMIZATIONS,
		account,
		payload,
	}),
	getAccountCustomizationsInitialState: () => ({
		type: types.GET_ACCOUNT_CUSTOMIZATIONS_INITIAL_STATE,
		payload: null,
	}),
	getAccountCustomizationsLoading: () => ({
		type: types.GET_ACCOUNT_CUSTOMIZATIONS_LOADING,
		payload: null,
	}),
	getAccountCustomizationsFulfilled: (payload: PaginatedApiResponse<Customization>) => ({
		type: types.GET_ACCOUNT_CUSTOMIZATIONS_FULFILLED,
		payload,
	}),
	getAccountCustomizationsRejected: (payload: Error) => ({
		type: types.GET_ACCOUNT_CUSTOMIZATIONS_REJECTED,
		payload,
	}),

	//GET_CUSTOMIZATION_BY_TYPE
	getCustomizationByType: (account: Account, customizationType: CustomizationType) => ({
		type: types.GET_CUSTOMIZATION_BY_TYPE,
		account,
		customizationType,
		payload: null,
	}),
	getCustomizationByTypeInitialState: () => ({
		type: types.GET_CUSTOMIZATION_BY_TYPE_INITIAL_STATE,
		payload: null,
	}),
	getCustomizationByTypeLoading: () => ({
		type: types.GET_CUSTOMIZATION_BY_TYPE_LOADING,
		payload: null,
	}),
	getCustomizationByTypeFulfilled: (payload: Customization) => ({
		type: types.GET_CUSTOMIZATION_BY_TYPE_FULFILLED,
		payload,
	}),
	getCustomizationByTypeRejected: (payload: Error) => ({
		type: types.GET_CUSTOMIZATION_BY_TYPE_REJECTED,
		payload,
	}),

	//UPDATE_CUSTOMIZATION_BY_TYPE
	updateCustomizationByType: (
		account: Account,
		customizationType: CustomizationType,
		payload: UpdateCustomizationRequest,
		successCb?,
		errorCb?
	) => ({
		type: types.UPDATE_CUSTOMIZATION_BY_TYPE,
		account,
		customizationType,
		payload,
		successCb,
		errorCb,
	}),
	updateCustomizationByTypeInitialState: () => ({
		type: types.UPDATE_CUSTOMIZATION_BY_TYPE_INITIAL_STATE,
		payload: null,
	}),
	updateCustomizationByTypeLoading: () => ({
		type: types.UPDATE_CUSTOMIZATION_BY_TYPE_LOADING,
		payload: null,
	}),
	updateCustomizationByTypeFulfilled: (payload: Customization) => ({
		type: types.UPDATE_CUSTOMIZATION_BY_TYPE_FULFILLED,
		payload,
	}),
	updateCustomizationByTypeRejected: (payload: Error) => ({
		type: types.UPDATE_CUSTOMIZATION_BY_TYPE_REJECTED,
		payload,
	}),

	//GET_CUSTOMIZATION
	getCustomization: (account: Account, customization: Customization) => ({
		type: types.GET_CUSTOMIZATION,
		account,
		customization,
		payload: null,
	}),
	getCustomizationInitialState: () => ({
		type: types.GET_CUSTOMIZATION_INITIAL_STATE,
		payload: null,
	}),
	getCustomizationLoading: () => ({
		type: types.GET_CUSTOMIZATION_LOADING,
		payload: null,
	}),
	getCustomizationFulfilled: (payload: Customization) => ({
		type: types.GET_CUSTOMIZATION_FULFILLED,
		payload,
	}),
	getCustomizationRejected: (payload: Error) => ({
		type: types.GET_CUSTOMIZATION_REJECTED,
		payload,
	}),

	//CREATE_CUSTOMIZATION
	createCustomization: (account: Account, payload: CreateCustomizationRequest, successCb?, errorCb?) => ({
		type: types.CREATE_CUSTOMIZATION,
		account,
		payload,
		successCb,
		errorCb,
	}),
	createCustomizationInitialState: () => ({
		type: types.CREATE_CUSTOMIZATION_INITIAL_STATE,
		payload: null,
	}),
	createCustomizationLoading: () => ({
		type: types.CREATE_CUSTOMIZATION_LOADING,
		payload: null,
	}),
	createCustomizationFulfilled: (payload: Customization) => ({
		type: types.CREATE_CUSTOMIZATION_FULFILLED,
		payload,
	}),
	createCustomizationRejected: (payload: Error) => ({
		type: types.CREATE_CUSTOMIZATION_REJECTED,
		payload,
	}),
	//UPDATE_CUSTOMIZATION
	updateCustomization: (account: Account, customization: Customization, payload, successCb?, errorCb?) => ({
		type: types.UPDATE_CUSTOMIZATION,
		account,
		customization,
		payload,
		successCb,
		errorCb,
	}),
	updateCustomizationInitialState: () => ({
		type: types.UPDATE_CUSTOMIZATION_INITIAL_STATE,
		payload: null,
	}),
	updateCustomizationLoading: () => ({
		type: types.UPDATE_CUSTOMIZATION_LOADING,
		payload: null,
	}),
	updateCustomizationFulfilled: (payload: Customization) => ({
		type: types.UPDATE_CUSTOMIZATION_FULFILLED,
		payload,
	}),
	updateCustomizationRejected: (payload: Error) => ({
		type: types.UPDATE_CUSTOMIZATION_REJECTED,
		payload,
	}),
	//DELETE_CUSTOMIZATION
	deleteCustomization: (account: Account, customization: Customization, successCb?, errorCb?) => ({
		type: types.DELETE_CUSTOMIZATION,
		account,
		payload: null,
		customization,
		successCb,
		errorCb,
	}),
	deleteCustomizationInitialState: () => ({
		type: types.DELETE_CUSTOMIZATION_INITIAL_STATE,
		payload: null,
	}),
	deleteCustomizationLoading: () => ({
		type: types.DELETE_CUSTOMIZATION_LOADING,
		payload: null,
	}),
	deleteCustomizationFulfilled: () => ({
		type: types.DELETE_CUSTOMIZATION_FULFILLED,
		payload: null,
	}),
	deleteCustomizationRejected: (payload: Error) => ({
		type: types.DELETE_CUSTOMIZATION_REJECTED,
		payload,
	}),

	updateAccountBanner: (id: string, payload, successCb?, errorCb?) => ({
		type: types.UPDATE_ACCOUNT_BANNER,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updateAccountBannerInitialState: () => ({
		type: types.UPDATE_ACCOUNT_BANNER_INITIAL_STATE,
		payload: null,
	}),
	updateAccountBannerLoading: () => ({
		type: types.UPDATE_ACCOUNT_BANNER_LOADING,
		payload: null,
	}),
	updateAccountBannerFulfilled: (payload) => ({
		type: types.UPDATE_ACCOUNT_BANNER_FULFILLED,
		payload,
	}),
	updateAccountBannerRejected: (payload: Error) => ({
		type: types.UPDATE_ACCOUNT_BANNER_REJECTED,
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
