import { MessageSenderRequest } from '../../types'

const types = {
	VALIDATE_RECIPIENT: '[recipients] VALIDATE_RECIPIENT',
	VALIDATE_RECIPIENT_INITIAL_STATE: '[recipients] VALIDATE_RECIPIENT_INITIAL_STATE',
	VALIDATE_RECIPIENT_LOADING: '[recipients] VALIDATE_RECIPIENT_LOADING',
	VALIDATE_RECIPIENT_FULFILLED: '[recipients] VALIDATE_RECIPIENT_FULFILLED',
	VALIDATE_RECIPIENT_REJECTED: '[recipients] VALIDATE_RECIPIENT_REJECTED',

	SIGNATURE_DECLINED: '[recipients] SIGNATURE_DECLINED',
	SIGNATURE_DECLINED_INITIAL_STATE: '[recipients] SIGNATURE_DECLINED_INITIAL_STATE',
	SIGNATURE_DECLINED_LOADING: '[recipients] SIGNATURE_DECLINED_LOADING',
	SIGNATURE_DECLINED_FULFILLED: '[recipients] SIGNATURE_DECLINED_FULFILLED',
	SIGNATURE_DECLINED_REJECTED: '[recipients] SIGNATURE_DECLINED_REJECTED',

	MESSAGE_SENDER: '[recipients] MESSAGE_SENDER',
	MESSAGE_SENDER_INITIAL_STATE: '[recipients] MESSAGE_SENDER_INITIAL_STATE',
	MESSAGE_SENDER_LOADING: '[recipients] MESSAGE_SENDER_LOADING',
	MESSAGE_SENDER_FULFILLED: '[recipients] MESSAGE_SENDER_FULFILLED',
	MESSAGE_SENDER_REJECTED: '[recipients] MESSAGE_SENDER_REJECTED',
}

export const recipientActions = {
	...types,
	validateRecipient: (token: string, successCb?, errorCb?) => ({
		type: types.VALIDATE_RECIPIENT,
		token,
		successCb,
		errorCb,
		payload: null,
	}),
	validateRecipientInitialState: () => ({
		type: types.VALIDATE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	validateRecipientLoading: () => ({
		type: types.VALIDATE_RECIPIENT_LOADING,
		payload: null,
	}),
	validateRecipientFulfilled: (payload) => ({
		type: types.VALIDATE_RECIPIENT_FULFILLED,
		payload,
	}),
	validateRecipientRejected: (payload: Error) => ({
		type: types.VALIDATE_RECIPIENT_REJECTED,
		payload,
	}),

	declineSignature: (package_id: string, recipient_id: string) => ({
		type: types.SIGNATURE_DECLINED,
		package_id,
		recipient_id,
		payload: null,
	}),
	declineSignatureInitialState: () => ({
		type: types.SIGNATURE_DECLINED_INITIAL_STATE,
		payload: null,
	}),
	declineSignatureLoading: () => ({
		type: types.SIGNATURE_DECLINED_LOADING,
		payload: null,
	}),
	declineSignatureFulfilled: (payload) => ({
		type: types.SIGNATURE_DECLINED_FULFILLED,
		payload,
	}),
	declineSignatureRejected: (payload: Error) => ({
		type: types.SIGNATURE_DECLINED_REJECTED,
		payload,
	}),

	messageSender: (package_id: string, recipient_id: string, payload: MessageSenderRequest, successCb?, errorCb?) => ({
		type: types.MESSAGE_SENDER,
		package_id,
		recipient_id,
		payload,
		successCb,
		errorCb,
	}),
	messageSenderInitialState: () => ({
		type: types.MESSAGE_SENDER_INITIAL_STATE,
		payload: null,
	}),
	messageSenderLoading: () => ({
		type: types.MESSAGE_SENDER_LOADING,
		payload: null,
	}),
	messageSenderFulfilled: (payload) => ({
		type: types.MESSAGE_SENDER_FULFILLED,
		payload,
	}),
	messageSenderRejected: (payload: Error) => ({
		type: types.MESSAGE_SENDER_REJECTED,
		payload,
	}),
}
