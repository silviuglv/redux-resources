import { fromJS } from 'immutable'
import { recipientActions } from '../actions'
import { stateUtility } from '../../utilities'
import { RecipientsState } from '../../types'

const state: RecipientsState = {
	recipients: stateUtility.getPaginationInitialState(),
	recipientTypes: stateUtility.getPaginationInitialState(),
	complete: stateUtility.getObserverInitialState(),
	decline: stateUtility.getObserverInitialState(),
	messageSender: stateUtility.getObserverInitialState(),
}
const initialState = fromJS(state)

export const recipients = (state = initialState, action) => {
	switch (action.type) {
		//decline signature
		case recipientActions.SIGNATURE_DECLINED_INITIAL_STATE:
			return state.merge({
				decline: stateUtility.getObserverInitialState(),
			})
		case recipientActions.SIGNATURE_DECLINED_LOADING:
			return state.merge({
				decline: stateUtility.getObserverLoading(),
			})
		case recipientActions.SIGNATURE_DECLINED_FULFILLED:
			return state.merge({
				decline: stateUtility.getObserverFulfilled(),
				recipients: stateUtility.getPaginationFulfilled(action.payload),
			})
		case recipientActions.SIGNATURE_DECLINED_REJECTED:
			return state.merge({
				decline: stateUtility.getObserverRejected(action.payload),
			})
		// message sender
		case recipientActions.MESSAGE_SENDER_INITIAL_STATE:
			return state.merge({
				messageSender: stateUtility.getObserverInitialState(),
			})
		case recipientActions.MESSAGE_SENDER_LOADING:
			return state.merge({
				messageSender: stateUtility.getObserverLoading(),
			})
		case recipientActions.MESSAGE_SENDER_FULFILLED:
			return state.merge({
				messageSender: stateUtility.getObserverFulfilled(),
			})
		case recipientActions.MESSAGE_SENDER_REJECTED:
			return state.merge({
				messageSender: stateUtility.getObserverRejected(action.payload),
			})
		case recipientActions.COMPLETE_INITIAL_STATE:
			return state.merge({
				complete: stateUtility.getObserverInitialState(),
			})
		case recipientActions.COMPLETE_LOADING:
			return state.merge({
				complete: stateUtility.getObserverLoading(),
			})
		case recipientActions.COMPLETE_FULFILLED:
			return state.merge({
				complete: stateUtility.getObserverFulfilled(),
				recipients: stateUtility.getPaginationFulfilled(action.payload),
			})
		case recipientActions.COMPLETE_REJECTED:
			return state.merge({
				complete: stateUtility.getObserverRejected(action.payload),
			})
		default:
			return state
	}
}
