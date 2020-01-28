import { fromJS } from 'immutable'
import { recipientActions } from '../actions'
import { stateUtility } from '../../utilities'
import { RecipientsState } from '../../types'

const state: RecipientsState = {
	validateRecipient: stateUtility.getObserverInitialState(),
	declineSignature: stateUtility.getObserverInitialState(),
	messageSender: stateUtility.getObserverInitialState(),
}
const initialState = fromJS(state)

export const recipients = (state = initialState, action) => {
	switch (action.type) {
		//validate
		case recipientActions.VALIDATE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				validateRecipient: stateUtility.getObserverInitialState(),
			})
		case recipientActions.VALIDATE_RECIPIENT_LOADING:
			return state.merge({
				validateRecipient: stateUtility.getObserverLoading(),
			})
		case recipientActions.VALIDATE_RECIPIENT_FULFILLED:
			return state.merge({
				validateRecipient: stateUtility.getObserverFulfilled(),
			})
		case recipientActions.VALIDATE_RECIPIENT_REJECTED:
			return state.merge({
				validateRecipient: stateUtility.getObserverRejected(action.payload),
			})
		//decline signature
		case recipientActions.SIGNATURE_DECLINED_INITIAL_STATE:
			return state.merge({
				declineSignature: stateUtility.getObserverInitialState(),
			})
		case recipientActions.SIGNATURE_DECLINED_LOADING:
			return state.merge({
				declineSignature: stateUtility.getObserverLoading(),
			})
		case recipientActions.SIGNATURE_DECLINED_FULFILLED:
			return state.merge({
				declineSignature: stateUtility.getObserverFulfilled(),
			})
		case recipientActions.SIGNATURE_DECLINED_REJECTED:
			return state.merge({
				declineSignature: stateUtility.getObserverRejected(action.payload),
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
		default:
			return state
	}
}
