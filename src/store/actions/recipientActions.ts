import { MessageSenderRequest } from '../../types'

const types = {
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

	COMPLETE: '[recipients] COMPLETE',
	COMPLETE_INITIAL_STATE: '[recipients] COMPLETE_INITIAL_STATE',
	COMPLETE_LOADING: '[recipients] COMPLETE_LOADING',
	COMPLETE_FULFILLED: '[recipients] COMPLETE_FULFILLED',
	COMPLETE_REJECTED: '[recipients] COMPLETE_REJECTED',

	UPDATE_RECIPIENT_PHOTO: '[recipients] UPDATE_RECIPIENT_PHOTO',
	UPDATE_RECIPIENT_PHOTO_INITIAL_STATE: '[recipients] UPDATE_RECIPIENT_PHOTO_INITIAL_STATE',
	UPDATE_RECIPIENT_PHOTO_LOADING: '[recipients] UPDATE_RECIPIENT_PHOTO_LOADING',
	UPDATE_RECIPIENT_PHOTO_FULFILLED: '[recipients] UPDATE_RECIPIENT_PHOTO_FULFILLED',
	UPDATE_RECIPIENT_PHOTO_REJECTED: '[recipients] UPDATE_RECIPIENT_PHOTO_REJECTED',
}

export const recipientActions = {
	...types,
	decline: (package_id: string, recipient_id: string) => ({
		type: types.SIGNATURE_DECLINED,
		package_id,
		recipient_id,
		payload: null,
	}),
	declineInitialState: () => ({
		type: types.SIGNATURE_DECLINED_INITIAL_STATE,
		payload: null,
	}),
	declineLoading: () => ({
		type: types.SIGNATURE_DECLINED_LOADING,
		payload: null,
	}),
	declineFulfilled: (payload) => ({
		type: types.SIGNATURE_DECLINED_FULFILLED,
		payload,
	}),
	declineRejected: (payload: Error) => ({
		type: types.SIGNATURE_DECLINED_REJECTED,
		payload,
	}),
	messageSender: (package_id: string, recipient_id: string, payload: MessageSenderRequest, successCb, errorCb) => ({
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

	complete: (package_id: string, recipient_id: string, successCb, errorCb) => ({
		type: types.COMPLETE,
		package_id,
		recipient_id,
		successCb,
		errorCb,
		payload: null,
	}),
	completeInitialState: () => ({
		type: types.COMPLETE_INITIAL_STATE,
		payload: null,
	}),
	completeLoading: () => ({
		type: types.COMPLETE_LOADING,
		payload: null,
	}),
	completeFulfilled: (payload) => ({
		type: types.COMPLETE_FULFILLED,
		payload,
	}),
	completeRejected: (payload: Error) => ({
		type: types.COMPLETE_REJECTED,
		payload,
	}),

	updateRecipientPhoto: (id: string, payload: any, successCb, errorCb) => ({
		type: types.UPDATE_RECIPIENT_PHOTO,
		id,
		payload,
		successCb,
		errorCb,
	}),
	updateRecipientPhotoInitialState: () => ({
		type: types.UPDATE_RECIPIENT_PHOTO_INITIAL_STATE,
		payload: null,
	}),
	updateRecipientPhotoLoading: () => ({
		type: types.UPDATE_RECIPIENT_PHOTO_LOADING,
		payload: null,
	}),
	updateRecipientPhotoFulfilled: (payload) => ({
		type: types.UPDATE_RECIPIENT_PHOTO_FULFILLED,
		payload,
	}),
	updateRecipientPhotoRejected: (payload: Error) => ({
		type: types.UPDATE_RECIPIENT_PHOTO_REJECTED,
		payload,
	}),
}
