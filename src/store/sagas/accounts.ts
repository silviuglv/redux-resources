import { accountActions, accountInviteActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { accountApi } from '../../api'
import { AnyAction } from 'redux'

export function* getAccounts({ payload }: any) {
	try {
		//	yield put(accountActions.accountsInitialState())
		yield put(accountActions.accountsLoading())
		const { data } = yield call(accountApi.getAccounts, payload)
		yield put(accountActions.accountsFulfilled(data))
	} catch (error) {
		yield put(accountActions.accountsRejected(error))
	}
}

export function* getDefaultAccount() {
	try {
		//	yield put(accountActions.getDefaultAccountInitialState())
		yield put(accountActions.getDefaultAccountLoading())
		const { data } = yield call(accountApi.getDefaultAccount)
		yield put(accountActions.getDefaultAccountFulfilled(data))
	} catch (error) {
		yield put(accountActions.getDefaultAccountRejected(error))
	}
}

export function* setDefaultAccount({ id }: AnyAction) {
	try {
		yield put(accountActions.setDefaultAccountInitialState())
		yield put(accountActions.setDefaultAccountLoading())
		const { data } = yield call(accountApi.setDefaultAccount, id)
		yield put(accountActions.setDefaultAccountFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Default account updated!', 2000))
	} catch (error) {
		yield put(accountActions.setDefaultAccountRejected(error))
	}
}

export function* showAccount({ id }: AnyAction) {
	try {
		yield put(accountActions.showAccountInitialState())
		yield put(accountActions.showAccountLoading())
		const { data } = yield call(accountApi.show, id)
		yield put(accountActions.showAccountFulfilled(data))
	} catch (error) {
		yield put(accountActions.showAccountRejected(error))
	}
}

export function* getAccountUsers({ id, payload }: any) {
	try {
		yield put(accountActions.accountUsersInitialState())
		yield put(accountActions.accountUsersLoading())
		const { data } = yield call(accountApi.getUsers, id, payload)
		yield put(accountActions.accountUsersFulfilled(data))
	} catch (error) {
		yield put(accountActions.accountUsersRejected(error))
	}
}

export function* createAccount({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.createAccountInitialState())
		yield put(accountActions.createAccountLoading())
		const { data } = yield call(accountApi.create, payload)
		yield put(accountActions.createAccountFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Account created!', 2000))
		yield call(getAccounts, { params: {} })
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.createAccountRejected(error))
		errorCb && errorCb()
	}
}

export function* deleteAccountMember({ account, member, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.deleteAccountMemberInitialState())
		yield put(accountActions.deleteAccountMemberLoading())
		yield call(accountApi.deleteAccountMember, account.id, member.id)
		yield put(accountActions.deleteAccountMemberFulfilled())
		yield put(notificationActions.displaySnackbarMessage('Account member deleted!', 2000))
		yield call(getAccountUsers, { id: account.id })
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.deleteAccountMemberRejected(error))
		errorCb && errorCb()
	}
}

export function* updateAccountMember({ account, member, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.updateAccountMemberInitialState())
		yield put(accountActions.updateAccountMemberLoading())
		const { data } = yield call(accountApi.updateAccountMember, account.id, member.id, payload)
		yield put(accountActions.updateAccountMemberFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Account member updated!', 2000))
		yield call(getAccountUsers, { id: account.id })
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateAccountMemberRejected(error))
		errorCb && errorCb()
	}
}

export function* updateAccount({ account, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.updateAccountInitialState())
		yield put(accountActions.updateAccountLoading())
		const { data } = yield call(accountApi.update, account.id, payload)
		yield put(accountActions.updateAccountFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Account updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateAccountRejected(error))
		errorCb && errorCb()
	}
}

function* getInvoices({ account }: AnyAction) {
	try {
		yield put(accountActions.getInvoicesInitialState())
		yield put(accountActions.getInvoicesLoading())
		const { data } = yield call(accountApi.getInvoices, account.id)
		yield put(accountActions.getInvoicesFulfilled(data))
	} catch (error) {
		yield put(accountActions.getInvoicesRejected(error))
	}
}
//getCustomizationTypes
export function* getCustomizationTypes({ account, payload }: AnyAction) {
	try {
		yield put(accountActions.setCustomizationTypesLoading())
		const { data } = yield call(accountApi.getCustomizationTypes, account.id, payload)
		yield put(accountActions.setCustomizationTypesFulfilled(data))
	} catch (error) {
		yield put(accountActions.setCustomizationTypesRejected(error))
	}
}
//getAccountCustomizations
export function* getAccountCustomizations({ account, payload }: AnyAction) {
	try {
		yield put(accountActions.getAccountCustomizationsInitialState())
		yield put(accountActions.getAccountCustomizationsLoading())
		const { data } = yield call(accountApi.getAccountCustomizations, account.id, payload)
		yield put(accountActions.getAccountCustomizationsFulfilled(data))
	} catch (error) {
		yield put(accountActions.getAccountCustomizationsRejected(error))
	}
}

//getCustomization
export function* getCustomization({ account, payload }: AnyAction) {
	try {
		yield put(accountActions.getCustomizationInitialState())
		yield put(accountActions.getCustomizationLoading())
		const { data } = yield call(accountApi.getCustomization, account.id, payload)
		yield put(accountActions.getCustomizationFulfilled(data))
	} catch (error) {
		yield put(accountActions.getCustomizationRejected(error))
	}
}

//getCustomizationByType
export function* getCustomizationByType({ account, type }: AnyAction) {
	try {
		yield put(accountActions.getCustomizationByTypeInitialState())
		yield put(accountActions.getCustomizationByTypeLoading())
		const { data } = yield call(accountApi.getCustomizationByType, account.id, type.id)
		yield put(accountActions.getCustomizationByTypeFulfilled(data))
	} catch (error) {
		yield put(accountActions.getCustomizationByTypeRejected(error))
	}
}
//createCustomization
export function* createCustomization({ account, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.createCustomizationInitialState())
		yield put(accountActions.createCustomizationLoading())
		const { data } = yield call(accountApi.createCustomization, account.id, payload)
		yield put(accountActions.createCustomizationFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Account Customization Saved', 2000))
		yield call(accountApi.getAccountCustomizations, account.id)
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.createCustomizationRejected(error))
		errorCb && errorCb()
	}
}

//updateCustomization
export function* updateCustomization({ account, customization, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.updateCustomizationInitialState())
		yield put(accountActions.updateCustomizationLoading())
		const { data } = yield call(accountApi.updateCustomization, account.id, customization.id, payload)
		yield put(accountActions.updateCustomizationFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Customization updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateCustomizationRejected(error))
		errorCb && errorCb()
	}
}

//updateCustomizationByType
export function* updateCustomizationByType({ account, type, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.updateCustomizationByTypeInitialState())
		yield put(accountActions.updateCustomizationByTypeLoading())
		const { data } = yield call(accountApi.updateCustomizationByType, account.id, type.id, payload)
		yield put(accountActions.updateCustomizationByTypeFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Customization updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateCustomizationByTypeRejected(error))
		errorCb && errorCb()
	}
}

//deleteCustomization
export function* deleteCustomization({ account, customization, successCb, errorCb }: AnyAction) {
	try {
		yield put(accountActions.deleteCustomizationInitialState())
		yield put(accountActions.deleteCustomizationLoading())
		yield call(accountApi.deleteCustomization, account.id, customization.id)
		yield put(accountActions.deleteCustomizationFulfilled())
		yield put(notificationActions.displaySnackbarMessage('Customization deleted.', 2000))
		yield call(accountApi.getAccountCustomizations, account.id)
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.deleteCustomizationRejected(error))
		errorCb && errorCb()
	}
}

export function* accounts() {
	yield takeEvery(accountActions.LOAD_ACCOUNTS, getAccounts)
	yield takeEvery(accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED, getAccounts)

	yield takeEvery(accountActions.LOAD_DEFAULT_ACCOUNT, getDefaultAccount)
	yield takeEvery(accountActions.SET_DEFAULT_ACCOUNT, setDefaultAccount)
	yield takeEvery(accountActions.CREATE_ACCOUNT, createAccount)
	yield takeEvery(accountActions.SHOW_ACCOUNT, showAccount)
	yield takeEvery(accountActions.LOAD_ACCOUNT_USERS, getAccountUsers)
	yield takeEvery(accountActions.DELETE_ACCOUNT_MEMBER, deleteAccountMember)
	yield takeEvery(accountActions.UPDATE_ACCOUNT_MEMBER, updateAccountMember)
	yield takeEvery(accountActions.UPDATE_ACCOUNT, updateAccount)
	yield takeEvery(accountActions.GET_CUSTOMIZATION_TYPES, getCustomizationTypes)
	yield takeEvery(accountActions.GET_ACCOUNT_CUSTOMIZATIONS, getAccountCustomizations)
	yield takeEvery(accountActions.GET_CUSTOMIZATION, getCustomization)
	yield takeEvery(accountActions.GET_CUSTOMIZATION_BY_TYPE, getCustomizationByType)
	yield takeEvery(accountActions.CREATE_CUSTOMIZATION, createCustomization)
	yield takeEvery(accountActions.UPDATE_CUSTOMIZATION, updateCustomization)
	yield takeEvery(accountActions.UPDATE_CUSTOMIZATION_BY_TYPE, updateCustomizationByType)
	yield takeEvery(accountActions.DELETE_CUSTOMIZATION, deleteCustomization)
	yield takeEvery(accountActions.GET_INVOICES, getInvoices)
}
