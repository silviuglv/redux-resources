import { fromJS } from 'immutable'
import { accountInviteActions } from '../actions'
import { stateUtility } from '../../utilities'
import { AccountInvitesState } from '../../types'

const state: AccountInvitesState = {
	list: stateUtility.getPaginationInitialState(),
	getMyAccountInvites: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
	deleteAccountInvite: stateUtility.getObserverInitialState(),
	acceptAccountInvite: stateUtility.getObserverInitialState(),
	createAccountInvite: stateUtility.getItemInitialState(),
}

const initialState = fromJS(state)

export const accountInvites = (state = initialState, action) => {
	switch (action.type) {
		//  list
		case accountInviteActions.GET_ACCOUNT_INVITES_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case accountInviteActions.GET_ACCOUNT_INVITES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case accountInviteActions.GET_ACCOUNT_INVITES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountInviteActions.GET_ACCOUNT_INVITES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  getMyAccountInvites
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_INITIAL_STATE:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationInitialState(),
			})
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_LOADING:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationLoading(),
			})
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_FULFILLED:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationFulfilled(action.payload),
			})
		case accountInviteActions.GET_MY_ACCOUNT_INVITES_REJECTED:
			return state.merge({
				getMyAccountInvites: stateUtility.getPaginationRejected(action.payload),
			})

		//  deleteAccountInvite
		case accountInviteActions.DELETE_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverInitialState(),
			})
		case accountInviteActions.DELETE_ACCOUNT_INVITE_LOADING:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverLoading(),
			})
		case accountInviteActions.DELETE_ACCOUNT_INVITE_FULFILLED:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverFulfilled(),
			})
		case accountInviteActions.DELETE_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				deleteAccountInvite: stateUtility.getObserverRejected(action.payload),
			})

		//  acceptAccountInvite
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverInitialState(),
			})
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_LOADING:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverLoading(),
			})
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case accountInviteActions.ACCEPT_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				acceptAccountInvite: stateUtility.getObserverRejected(action.payload),
			})

		//  showAccountInvite
		case accountInviteActions.SHOW_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				item: stateUtility.getItemInitialState(),
			})
		case accountInviteActions.SHOW_ACCOUNT_INVITE_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case accountInviteActions.SHOW_ACCOUNT_INVITE_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case accountInviteActions.SHOW_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//  createAccountInvite
		case accountInviteActions.CREATE_ACCOUNT_INVITE_INITIAL_STATE:
			return state.merge({
				createAccountInvite: stateUtility.getItemInitialState(),
			})
		case accountInviteActions.CREATE_ACCOUNT_INVITE_LOADING:
			return state.merge({
				createAccountInvite: stateUtility.getItemLoading(),
			})
		case accountInviteActions.CREATE_ACCOUNT_INVITE_FULFILLED:
			return state.merge({
				createAccountInvite: stateUtility.getItemFulfilled(action.payload),
			})
		case accountInviteActions.CREATE_ACCOUNT_INVITE_REJECTED:
			return state.merge({
				createAccountInvite: stateUtility.getItemRejected(action.payload),
			})

		default:
			return state
	}
}
