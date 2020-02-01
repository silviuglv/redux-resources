import { fromJS } from 'immutable'
import { recipientActions } from '../actions'
import { stateUtility } from '../../utilities'
import { PackagesState, RecipientsState } from '../../types'

const state: RecipientsState = {
	recipients: stateUtility.getPaginationInitialState(),
	recipient: stateUtility.getItemInitialState(),
	validateRecipient: stateUtility.getObserverInitialState(),
	declineSignature: stateUtility.getObserverInitialState(),
	messageSender: stateUtility.getObserverInitialState(),
}
const initialState = fromJS(state)

export const recipients = (state = initialState, action) => {
	switch (action.type) {
		//  getRecipients
		case recipientActions.GET_PACKAGE_RECIPIENTS_INITIAL_STATE:
			return state.merge({
				recipients: stateUtility.getPaginationInitialState(),
			})
		case recipientActions.GET_PACKAGE_RECIPIENTS_LOADING:
			return state.merge({
				recipients: stateUtility.getPaginationLoading(),
			})
		case recipientActions.GET_PACKAGE_RECIPIENTS_FULFILLED:
			return state.merge({
				recipients: stateUtility.getPaginationFulfilled(action.payload),
			})
		case recipientActions.GET_PACKAGE_RECIPIENTS_REJECTED:
			return state.merge({
				recipients: stateUtility.getPaginationRejected(action.payload),
			})

		//	Delete recipient
		case recipientActions.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getObserverInitialState(),
			})
		case recipientActions.DELETE_PACKAGE_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getObserverLoading(),
			})
		case recipientActions.DELETE_PACKAGE_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getObserverFulfilled(),
			})
		case recipientActions.DELETE_PACKAGE_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getObserverRejected(action.payload),
			})

		//  createRecipient
		case recipientActions.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getItemInitialState(),
			})
		case recipientActions.CREATE_PACKAGE_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getItemLoading(),
			})
		case recipientActions.CREATE_PACKAGE_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getItemFulfilled(action.payload),
			})
		case recipientActions.CREATE_PACKAGE_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getItemRejected(action.payload),
			})

		//  updateRecipient
		case recipientActions.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getItemInitialState(),
			})
		case recipientActions.UPDATE_PACKAGE_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getItemLoading(),
			})
		case recipientActions.UPDATE_PACKAGE_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getItemFulfilled(action.payload),
			})
		case recipientActions.UPDATE_PACKAGE_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getItemRejected(action.payload),
			})
		//  myRecipient
		case recipientActions.GET_MY_RECIPIENT_INITIAL_STATE:
			return state.merge({
				recipient: stateUtility.getItemInitialState(),
			})
		case recipientActions.GET_MY_RECIPIENT_LOADING:
			return state.merge({
				recipient: stateUtility.getItemLoading(),
			})
		case recipientActions.GET_MY_RECIPIENT_FULFILLED:
			return state.merge({
				recipient: stateUtility.getItemFulfilled(action.payload),
			})
		case recipientActions.GET_MY_RECIPIENT_REJECTED:
			return state.merge({
				recipient: stateUtility.getItemRejected(action.payload),
			})
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
