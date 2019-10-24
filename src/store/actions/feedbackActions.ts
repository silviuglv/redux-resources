import { CreateFeedbackRequest, Error, Feedback } from '../../types'

const types = {
	SEND_FEEDBACK: '[feedback] SEND_FEEDBACK',
	SET_SEND_FEEDBACK_LOADING: '[feedback] SET_SEND_FEEDBACK_LOADING',
	SET_SEND_FEEDBACK_FULFILLED: '[feedback] SET_SEND_FEEDBACK_FULFILLED',
	SET_SEND_FEEDBACK_REJECTED: '[feedback] SET_SEND_FEEDBACK_REJECTED',
}

export const feedbackActions = {
	...types,
	sendFeedback: (payload: CreateFeedbackRequest, successCb?, errorCb?) => ({
		type: types.SEND_FEEDBACK,
		payload,
		successCb,
		errorCb,
	}),
	setSendFeedbackLoading: () => ({
		type: types.SET_SEND_FEEDBACK_LOADING,
		payload: null,
	}),
	setSendFeedbackFulfilled: (payload: Feedback) => ({
		type: types.SET_SEND_FEEDBACK_FULFILLED,
		payload,
	}),
	setSendFeedbackRejected: (payload: Error) => ({
		type: types.SET_SEND_FEEDBACK_REJECTED,
		payload,
	}),
}
