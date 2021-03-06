import { fromJS } from 'immutable'
import { subscriptionActions } from '../actions'
import { stateUtility } from '../../utilities'
import { SubscriptionsState } from '../../types'

const state: SubscriptionsState = {
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
}

const initialState = fromJS(state)

export const subscriptions = (state = initialState, action) => {
	//  list
	switch (action.type) {
		//  list
		case subscriptionActions.SET_SUBSCRIPTIONS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case subscriptionActions.SET_SUBSCRIPTIONS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case subscriptionActions.SET_SUBSCRIPTIONS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//	create
		case subscriptionActions.SET_CREATE_SUBSCRIPTION_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case subscriptionActions.SET_CREATE_SUBSCRIPTION_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case subscriptionActions.SET_CREATE_SUBSCRIPTION_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//	update
		case subscriptionActions.SET_UPDATE_SUBSCRIPTION_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case subscriptionActions.SET_UPDATE_SUBSCRIPTION_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case subscriptionActions.SET_UPDATE_SUBSCRIPTION_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		//	delete
		case subscriptionActions.SET_DELETE_SUBSCRIPTION_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case subscriptionActions.SET_DELETE_SUBSCRIPTION_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled({}),
			})
		case subscriptionActions.SET_DELETE_SUBSCRIPTION_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})
		default:
			return state
	}
}
