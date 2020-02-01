import { recipientActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { recipientApi } from '../../api'
import { AnyAction } from 'redux'

function* validateRecipient({ token, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.validateRecipientInitialState())
		yield put(recipientActions.validateRecipientLoading())
		const { data } = yield call(recipientApi.validateRecipient, token)
		yield put(recipientActions.validateRecipientFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(recipientActions.validateRecipientRejected(error))
		errorCb && errorCb()
	}
}

function* declineSignature({ package_id, recipient_id }: AnyAction) {
	try {
		yield put(recipientActions.declineSignatureInitialState())
		yield put(recipientActions.declineSignatureLoading())
		const { data } = yield call(recipientApi.declineSignature, package_id, recipient_id)
		yield put(recipientActions.declineSignatureFulfilled(data))
	} catch (error) {
		yield put(recipientActions.declineSignatureRejected(error))
	}
}

function* messageSender({ package_id, recipient_id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.messageSenderInitialState())
		yield put(recipientActions.messageSenderLoading())
		const { data } = yield call(recipientApi.messageSender, package_id, recipient_id, payload)
		yield put(recipientActions.messageSenderFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(recipientActions.messageSenderRejected(error))
		errorCb && errorCb()
	}
}

export function* recipients() {
	yield takeEvery(recipientActions.VALIDATE_RECIPIENT, validateRecipient)
	yield takeEvery(recipientActions.SIGNATURE_DECLINED, declineSignature)
	yield takeEvery(recipientActions.MESSAGE_SENDER, messageSender)
}
