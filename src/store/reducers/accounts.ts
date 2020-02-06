import { fromJS } from 'immutable'
import { accountActions } from '../actions'
import { stateUtility } from '../../utilities'
import { AccountsState } from '../../types'

const state: AccountsState = {
	list: stateUtility.getPaginationFromLocalStorage('accountList'),
	item: stateUtility.getItemInitialState(),
	users: stateUtility.getPaginationInitialState(),
	accountCustomizations: stateUtility.getPaginationInitialState(),
	defaultAccount: stateUtility.getItemFromLocalStorage('defaultAccount'),
	setDefaultAccount: stateUtility.getObserverInitialState(),
	createAccount: stateUtility.getItemInitialState(),
	deleteAccountMember: stateUtility.getObserverInitialState(),
	updateAccountMember: stateUtility.getObserverInitialState(),
	updateAccount: stateUtility.getObserverInitialState(),
	updateBanner: stateUtility.getObserverInitialState(),
	invoices: stateUtility.getPaginationInitialState(),
	customizationTypes: stateUtility.getPaginationInitialState(),
	customization: stateUtility.getItemInitialState(),
	createCustomization: stateUtility.getItemInitialState(),
	updateCustomization: stateUtility.getItemInitialState(),
	deleteCustomization: stateUtility.getObserverInitialState(),
}

const initialState = fromJS(state)

export const accounts = (state = initialState, action) => {
	switch (action.type) {
		//  item
		case accountActions.SHOW_ACCOUNT_INITIAL_STATE:
			return state.merge({
				item: stateUtility.getItemInitialState(),
			})
		case accountActions.SHOW_ACCOUNT_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case accountActions.SHOW_ACCOUNT_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.SHOW_ACCOUNT_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//  users
		case accountActions.LOAD_ACCOUNT_USERS_INITIAL_STATE:
			return state.merge({
				users: stateUtility.getPaginationInitialState(),
			})
		case accountActions.LOAD_ACCOUNT_USERS_LOADING:
			return state.merge({
				users: stateUtility.getPaginationLoading(),
			})
		case accountActions.LOAD_ACCOUNT_USERS_FULFILLED:
			return state.merge({
				users: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountActions.LOAD_ACCOUNT_USERS_REJECTED:
			return state.merge({
				users: stateUtility.getPaginationRejected(action.payload),
			})

		//  accounts
		case accountActions.LOAD_ACCOUNTS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case accountActions.LOAD_ACCOUNTS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case accountActions.LOAD_ACCOUNTS_FULFILLED:
			window.localStorage.setItem('accountList', JSON.stringify(action.payload))
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountActions.LOAD_ACCOUNTS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  getDefaultAccount
		case accountActions.LOAD_DEFAULT_ACCOUNT_INITIAL_STATE:
			return state.merge({
				defaultAccount: stateUtility.getItemInitialState(),
			})
		case accountActions.LOAD_DEFAULT_ACCOUNT_LOADING:
			return state.merge({
				defaultAccount: stateUtility.getItemLoading(),
			})
		case accountActions.LOAD_DEFAULT_ACCOUNT_FULFILLED:
			window.localStorage.setItem('defaultAccount', JSON.stringify(action.payload))
			return state.merge({
				defaultAccount: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.LOAD_DEFAULT_ACCOUNT_REJECTED:
			return state.merge({
				defaultAccount: stateUtility.getItemRejected(action.payload),
			})

		//  setDefaultAccount
		case accountActions.SET_DEFAULT_ACCOUNT_INITIAL_STATE:
			return state.merge({
				setDefaultAccount: stateUtility.getObserverInitialState(),
			})
		case accountActions.SET_DEFAULT_ACCOUNT_LOADING:
			return state.merge({
				setDefaultAccount: stateUtility.getObserverLoading(),
			})
		case accountActions.SET_DEFAULT_ACCOUNT_FULFILLED:
			window.localStorage.setItem('defaultAccount', JSON.stringify(action.payload))
			return state.merge({
				setDefaultAccount: stateUtility.getObserverFulfilled(),
				defaultAccount: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.SET_DEFAULT_ACCOUNT_REJECTED:
			return state.merge({
				setDefaultAccount: stateUtility.getObserverRejected(action.payload),
			})

		//  createAccount
		case accountActions.CREATE_ACCOUNT_INITIAL_STATE:
			return state.merge({
				createAccount: stateUtility.getItemInitialState(),
			})
		case accountActions.CREATE_ACCOUNT_LOADING:
			return state.merge({
				createAccount: stateUtility.getItemLoading(),
			})
		case accountActions.CREATE_ACCOUNT_FULFILLED:
			return state.merge({
				createAccount: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.CREATE_ACCOUNT_REJECTED:
			return state.merge({
				createAccount: stateUtility.getItemRejected(action.payload),
			})

		//  deleteAccountMember
		case accountActions.DELETE_ACCOUNT_MEMBER_INITIAL_STATE:
			return state.merge({
				deleteAccountMember: stateUtility.getObserverInitialState(),
			})
		case accountActions.DELETE_ACCOUNT_MEMBER_LOADING:
			return state.merge({
				deleteAccountMember: stateUtility.getObserverLoading(),
			})
		case accountActions.DELETE_ACCOUNT_MEMBER_FULFILLED:
			return state.merge({
				deleteAccountMember: stateUtility.getObserverFulfilled(),
			})
		case accountActions.DELETE_ACCOUNT_MEMBER_REJECTED:
			return state.merge({
				deleteAccountMember: stateUtility.getObserverRejected(action.payload),
			})

		//  updateAccountMember
		case accountActions.UPDATE_ACCOUNT_MEMBER_INITIAL_STATE:
			return state.merge({
				updateAccountMember: stateUtility.getObserverInitialState(),
			})
		case accountActions.UPDATE_ACCOUNT_MEMBER_LOADING:
			return state.merge({
				updateAccountMember: stateUtility.getObserverLoading(),
			})
		case accountActions.UPDATE_ACCOUNT_MEMBER_FULFILLED:
			return state.merge({
				updateAccountMember: stateUtility.getObserverFulfilled(),
			})
		case accountActions.UPDATE_ACCOUNT_MEMBER_REJECTED:
			return state.merge({
				updateAccountMember: stateUtility.getObserverRejected(action.payload),
			})

		//  updateAccount
		case accountActions.UPDATE_ACCOUNT_INITIAL_STATE:
			return state.merge({
				updateAccount: stateUtility.getObserverInitialState(),
			})
		case accountActions.UPDATE_ACCOUNT_LOADING:
			return state.merge({
				updateAccount: stateUtility.getObserverLoading(),
			})
		case accountActions.UPDATE_ACCOUNT_FULFILLED:
			const returnVal = {
				updateAccount: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			} as any
			if (action.payload.id === state.toJS().defaultAccount.data.id) {
				window.localStorage.setItem('defaultAccount', JSON.stringify(action.payload))
				returnVal.defaultAccount = stateUtility.getItemFulfilled(action.payload)
			}
			return state.merge(returnVal)

		case accountActions.UPDATE_ACCOUNT_REJECTED:
			return state.merge({
				updateAccount: stateUtility.getObserverRejected(action.payload),
			})

		//  customizationTypes
		case accountActions.SET_CUSTOMIZATION_TYPES_LOADING:
			return state.merge({
				customizationTypes: stateUtility.getPaginationLoading(),
			})
		case accountActions.SET_CUSTOMIZATION_TYPES_FULFILLED:
			return state.merge({
				customizationTypes: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountActions.SET_CUSTOMIZATION_TYPES_REJECTED:
			return state.merge({
				customizationTypes: stateUtility.getObserverRejected(action.payload),
			})

		//customizations
		case accountActions.GET_ACCOUNT_CUSTOMIZATIONS_INITIAL_STATE:
			return state.merge({
				customizations: stateUtility.getPaginationInitialState(),
			})
		case accountActions.GET_ACCOUNT_CUSTOMIZATIONS_LOADING:
			return state.merge({
				customizations: stateUtility.getPaginationLoading(),
			})
		case accountActions.GET_ACCOUNT_CUSTOMIZATIONS_FULFILLED:
			return state.merge({
				customizations: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountActions.GET_ACCOUNT_CUSTOMIZATIONS_REJECTED:
			return state.merge({
				customizations: stateUtility.getPaginationRejected(action.payload),
			})

		// getCustomization
		case accountActions.GET_CUSTOMIZATION_INITIAL_STATE:
			return state.merge({
				customization: stateUtility.getItemInitialState(),
			})
		case accountActions.GET_CUSTOMIZATION_LOADING:
			return state.merge({
				customization: stateUtility.getItemLoading(),
			})
		case accountActions.GET_CUSTOMIZATION_FULFILLED:
			return state.merge({
				customization: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.GET_CUSTOMIZATION_REJECTED:
			return state.merge({
				customization: stateUtility.getItemRejected(action.payload),
			})

		// getCustomizationByType
		case accountActions.GET_CUSTOMIZATION_BY_TYPE_INITIAL_STATE:
			return state.merge({
				customization: stateUtility.getItemInitialState(),
			})
		case accountActions.GET_CUSTOMIZATION_BY_TYPE_LOADING:
			return state.merge({
				customization: stateUtility.getItemLoading(),
			})
		case accountActions.GET_CUSTOMIZATION_BY_TYPE_FULFILLED:
			return state.merge({
				customization: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.GET_CUSTOMIZATION_BY_TYPE_REJECTED:
			return state.merge({
				customization: stateUtility.getItemRejected(action.payload),
			})

		//	createCustomization
		case accountActions.CREATE_CUSTOMIZATION_INITIAL_STATE:
			return state.merge({
				createCustomization: stateUtility.getItemInitialState(),
			})
		case accountActions.CREATE_CUSTOMIZATION_LOADING:
			return state.merge({
				createCustomization: stateUtility.getItemLoading(),
			})
		case accountActions.CREATE_CUSTOMIZATION_FULFILLED:
			return state.merge({
				createCustomization: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.CREATE_CUSTOMIZATION_REJECTED:
			return state.merge({
				createCustomization: stateUtility.getItemRejected(action.payload),
			})

		// updateCustomization
		case accountActions.UPDATE_CUSTOMIZATION_INITIAL_STATE:
			return state.merge({
				updateCustomization: stateUtility.getItemInitialState(),
			})
		case accountActions.UPDATE_CUSTOMIZATION_LOADING:
			return state.merge({
				updateCustomization: stateUtility.getItemLoading(),
			})
		case accountActions.UPDATE_CUSTOMIZATION_FULFILLED:
			return state.merge({
				updateCustomization: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.UPDATE_CUSTOMIZATION_REJECTED:
			return state.merge({
				updateCustomization: stateUtility.getItemRejected(action.payload),
			})

		// updateCustomizationByType
		case accountActions.UPDATE_CUSTOMIZATION_BY_TYPE_INITIAL_STATE:
			return state.merge({
				updateCustomization: stateUtility.getItemInitialState(),
			})
		case accountActions.UPDATE_CUSTOMIZATION_BY_TYPE_LOADING:
			return state.merge({
				updateCustomization: stateUtility.getItemLoading(),
			})
		case accountActions.UPDATE_CUSTOMIZATION_BY_TYPE_FULFILLED:
			return state.merge({
				updateCustomization: stateUtility.getItemFulfilled(action.payload),
			})
		case accountActions.UPDATE_CUSTOMIZATION_BY_TYPE_REJECTED:
			return state.merge({
				updateCustomization: stateUtility.getItemRejected(action.payload),
			})

		// deleteCustomization
		case accountActions.DELETE_CUSTOMIZATION_INITIAL_STATE:
			return state.merge({
				deleteCustomization: stateUtility.getObserverInitialState(),
			})
		case accountActions.DELETE_CUSTOMIZATION_LOADING:
			return state.merge({
				deleteCustomization: stateUtility.getObserverLoading(),
			})
		case accountActions.DELETE_CUSTOMIZATION_FULFILLED:
			return state.merge({
				deleteCustomization: stateUtility.getObserverFulfilled(),
			})
		case accountActions.DELETE_CUSTOMIZATION_REJECTED:
			return state.merge({
				deleteCustomization: stateUtility.getObserverRejected(action.payload),
			})

		//  updateBanner
		case accountActions.UPDATE_ACCOUNT_BANNER_INITIAL_STATE:
			return state.merge({
				updateBanner: stateUtility.getObserverInitialState(),
			})
		case accountActions.UPDATE_ACCOUNT_BANNER_LOADING:
			return state.merge({
				updateBanner: stateUtility.getObserverLoading(),
			})
		case accountActions.UPDATE_ACCOUNT_BANNER_FULFILLED:
			return state.merge({
				updateBanner: stateUtility.getObserverFulfilled(),
			})
		case accountActions.UPDATE_ACCOUNT_BANNER_REJECTED:
			return state.merge({
				updateBanner: stateUtility.getObserverRejected(action.payload),
			})

		//  invoices
		case accountActions.GET_INVOICES_INITIAL_STATE:
			return state.merge({
				invoices: stateUtility.getPaginationInitialState(),
			})
		case accountActions.GET_INVOICES_LOADING:
			return state.merge({
				invoices: stateUtility.getPaginationLoading(),
			})
		case accountActions.GET_INVOICES_FULFILLED:
			return state.merge({
				invoices: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountActions.GET_INVOICES_REJECTED:
			return state.merge({
				invoices: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
