import { notificationActions, feedbackActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { feedbackApi } from '../../api'

interface Props {
	payload: any
	successCb: VoidFunction
	errorCb: VoidFunction
}

function* sendFeedback({ payload, successCb, errorCb }: Props) {
	try {
		yield put(feedbackActions.setSendFeedbackLoading())
		const { data } = yield call(feedbackApi.sendFeedback, payload)
		yield put(feedbackActions.setSendFeedbackFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Feedback submitted!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(feedbackActions.setSendFeedbackRejected(error))
		errorCb && errorCb()
	}
}

export function* feedback() {
	yield takeEvery<any>(feedbackActions.SEND_FEEDBACK, sendFeedback)
}
