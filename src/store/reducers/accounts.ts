import { fromJS } from 'immutable'
import { accountActions } from '../actions'
import { stateUtility } from '../../utilities'
import { AccountsState } from '../../types'

const state: AccountsState = {
	list: stateUtility.getPaginationFromLocalStorage('accountList'),
	item: stateUtility.getItemInitialState(),
	users: stateUtility.getPaginationInitialState(),
	defaultAccount: stateUtility.getItemFromLocalStorage('defaultAccount'),
	setDefaultAccount: stateUtility.getObserverInitialState(),
	createAccount: stateUtility.getItemInitialState(),
	deleteAccountMember: stateUtility.getObserverInitialState(),
	updateAccountMember: stateUtility.getObserverInitialState(),
	updateAccount: stateUtility.getObserverInitialState(),
	updatePhoto: stateUtility.getObserverInitialState(),
	updateBanner: stateUtility.getObserverInitialState(),
	invoices: stateUtility.getPaginationInitialState(),
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

		//  updatePhoto
		case accountActions.UPDATE_ACCOUNT_PHOTO_INITIAL_STATE:
			return state.merge({
				updatePhoto: stateUtility.getObserverInitialState(),
			})
		case accountActions.UPDATE_ACCOUNT_PHOTO_LOADING:
			return state.merge({
				updatePhoto: stateUtility.getObserverLoading(),
			})
		case accountActions.UPDATE_ACCOUNT_PHOTO_FULFILLED:
			return state.merge({
				updatePhoto: stateUtility.getObserverFulfilled(),
			})
		case accountActions.UPDATE_ACCOUNT_PHOTO_REJECTED:
			return state.merge({
				updatePhoto: stateUtility.getObserverRejected(action.payload),
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
