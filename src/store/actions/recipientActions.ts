import {
	PaginatedApiResponse,
	MessageSenderRequest,
	CreateRecipientRequest,
	UpdateRecipientRequest,
	Package,
	Recipient,
} from '../../types'

const types = {
	GET_MY_RECIPIENT: '[recipients] GET_MY_RECIPIENT',
	GET_MY_RECIPIENT_INITIAL_STATE: '[recipients] GET_MY_RECIPIENT_INITIAL_STATE',
	GET_MY_RECIPIENT_LOADING: '[recipients] GET_MY_RECIPIENT_LOADING',
	GET_MY_RECIPIENT_FULFILLED: '[recipients] GET_MY_RECIPIENT_FULFILLED',
	GET_MY_RECIPIENT_REJECTED: '[recipients] GET_MY_RECIPIENT_REJECTED',

	GET_PACKAGE_RECIPIENTS: '[recipients] GET_PACKAGE_RECIPIENTS',
	GET_PACKAGE_RECIPIENTS_INITIAL_STATE: '[recipients] GET_PACKAGE_RECIPIENTS_INITIAL_STATE',
	GET_PACKAGE_RECIPIENTS_LOADING: '[recipients] GET_PACKAGE_RECIPIENTS_LOADING',
	GET_PACKAGE_RECIPIENTS_FULFILLED: '[recipients] GET_PACKAGE_RECIPIENTS_FULFILLED',
	GET_PACKAGE_RECIPIENTS_REJECTED: '[recipients] GET_PACKAGE_RECIPIENTS_REJECTED',

	CREATE_PACKAGE_RECIPIENT: '[recipients] CREATE_PACKAGE_RECIPIENT',
	CREATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[recipients] CREATE_PACKAGE_RECIPIENT_INITIAL_STATE',
	CREATE_PACKAGE_RECIPIENT_LOADING: '[recipients] CREATE_PACKAGE_RECIPIENT_LOADING',
	CREATE_PACKAGE_RECIPIENT_FULFILLED: '[recipients] CREATE_PACKAGE_RECIPIENT_FULFILLED',
	CREATE_PACKAGE_RECIPIENT_REJECTED: '[recipients] CREATE_PACKAGE_RECIPIENT_REJECTED',

	UPDATE_PACKAGE_RECIPIENT: '[recipients] UPDATE_PACKAGE_RECIPIENT',
	UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[recipients] UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE',
	UPDATE_PACKAGE_RECIPIENT_LOADING: '[recipients] UPDATE_PACKAGE_RECIPIENT_LOADING',
	UPDATE_PACKAGE_RECIPIENT_FULFILLED: '[recipients] UPDATE_PACKAGE_RECIPIENT_FULFILLED',
	UPDATE_PACKAGE_RECIPIENT_REJECTED: '[recipients] UPDATE_PACKAGE_RECIPIENT_REJECTED',

	DELETE_PACKAGE_RECIPIENT: '[recipients] DELETE_PACKAGE_RECIPIENT',
	DELETE_PACKAGE_RECIPIENT_INITIAL_STATE: '[recipients] DELETE_PACKAGE_RECIPIENT_INITIAL_STATE',
	DELETE_PACKAGE_RECIPIENT_LOADING: '[recipients] DELETE_PACKAGE_RECIPIENT_LOADING',
	DELETE_PACKAGE_RECIPIENT_FULFILLED: '[recipients] DELETE_PACKAGE_RECIPIENT_FULFILLED',
	DELETE_PACKAGE_RECIPIENT_REJECTED: '[recipients] DELETE_PACKAGE_RECIPIENT_REJECTED',

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
	getMyRecipient: (id: string, recipientToken: string) => ({
		type: types.GET_MY_RECIPIENT,
		id,
		recipientToken,
	}),
	getMyRecipientInitialState: () => ({
		type: types.GET_MY_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	getMyRecipientLoading: () => ({
		type: types.GET_MY_RECIPIENT_LOADING,
		payload: null,
	}),
	getMyRecipientFulfilled: (payload: PaginatedApiResponse<Package>) => ({
		type: types.GET_MY_RECIPIENT_FULFILLED,
		payload,
	}),
	getMyRecipientRejected: (payload: Error) => ({
		type: types.GET_MY_RECIPIENT_REJECTED,
		payload,
	}),
	createPackageRecipient: (id: string, payload: CreateRecipientRequest, successCb?, errorCb?) => ({
		type: types.CREATE_PACKAGE_RECIPIENT,
		payload,
		id,
		successCb,
		errorCb,
	}),
	getPackageRecipients: (id: string, payload = {}, successCb?, errorCb?) => ({
		type: types.GET_PACKAGE_RECIPIENTS,
		payload,
		id,
		successCb,
		errorCb,
	}),
	getPackageRecipientsInitialState: () => ({
		type: types.GET_PACKAGE_RECIPIENTS_INITIAL_STATE,
		payload: null,
	}),
	getPackageRecipientsLoading: () => ({
		type: types.GET_PACKAGE_RECIPIENTS_LOADING,
		payload: null,
	}),
	getPackageRecipientsFulfilled: (payload: PaginatedApiResponse<Recipient>) => ({
		type: types.GET_PACKAGE_RECIPIENTS_FULFILLED,
		payload,
	}),
	getPackageRecipientsRejected: (payload: Error) => ({
		type: types.GET_PACKAGE_RECIPIENTS_REJECTED,
		payload,
	}),
	createPackageRecipientInitialState: () => ({
		type: types.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	createPackageRecipientLoading: () => ({
		type: types.CREATE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	createPackageRecipientFulfilled: (payload: Recipient) => ({
		type: types.CREATE_PACKAGE_RECIPIENT_FULFILLED,
		payload,
	}),
	createPackageRecipientRejected: (payload: Error) => ({
		type: types.CREATE_PACKAGE_RECIPIENT_REJECTED,
		payload,
	}),
	updatePackageRecipient: (id: string, recipientId: string, payload: UpdateRecipientRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT,
		payload,
		id,
		recipientId,
		successCb,
		errorCb,
	}),
	updatePackageRecipientInitialState: () => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	updatePackageRecipientLoading: () => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	updatePackageRecipientFulfilled: (payload: Recipient) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_FULFILLED,
		payload,
	}),
	updatePackageRecipientRejected: (payload: Error) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_REJECTED,
		payload,
	}),
	deletePackageRecipient: (id: string, recipientId: string, successCb?, errorCb?) => ({
		type: types.DELETE_PACKAGE_RECIPIENT,
		payload: null,
		id,
		recipientId,
		successCb,
		errorCb,
	}),
	deletePackageRecipientInitialState: () => ({
		type: types.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	deletePackageRecipientLoading: () => ({
		type: types.DELETE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	deletePackageRecipientFulfilled: (response?) => ({
		type: types.DELETE_PACKAGE_RECIPIENT_FULFILLED,
		payload: response,
	}),
	deletePackageRecipientRejected: (payload: Error) => ({
		type: types.DELETE_PACKAGE_RECIPIENT_REJECTED,
		payload,
	}),
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
