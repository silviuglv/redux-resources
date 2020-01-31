import { recipientActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { recipientApi } from '../../api'
import { AnyAction } from 'redux'

function* getRecipients({ id, payload = {}, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.getPackageRecipientsInitialState())
		yield put(recipientActions.getPackageRecipientsLoading())
		const { data } = yield call(recipientApi.getRecipients, id, payload)
		yield put(recipientActions.getPackageRecipientsFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(recipientActions.getPackageRecipientsRejected(error))
		errorCb && errorCb()
	}
}

function* createRecipient({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.createPackageRecipientInitialState())
		yield put(recipientActions.createPackageRecipientLoading())
		const { data } = yield call(recipientApi.createRecipient, id, payload)
		yield put(recipientActions.createPackageRecipientFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(recipientActions.createPackageRecipientRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* updateRecipient({ id, recipientId, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.updatePackageRecipientInitialState())
		yield put(recipientActions.updatePackageRecipientLoading())
		const { data } = yield call(recipientApi.updateRecipient, id, recipientId, payload)
		yield put(recipientActions.updatePackageRecipientFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(recipientActions.updatePackageRecipientRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* deleteRecipient({ id, recipientId, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.deletePackageRecipientInitialState())
		yield put(recipientActions.deletePackageRecipientLoading())
		yield call(recipientApi.deleteRecipient, id, recipientId)
		yield put(recipientActions.deletePackageRecipientFulfilled())
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(recipientActions.deletePackageRecipientRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getMyRecipient({ id, recipientToken }: AnyAction) {
	try {
		yield put(recipientActions.getMyRecipientInitialState())
		yield put(recipientActions.getMyRecipientLoading())
		const { data } = yield call(recipientApi.getMyRecipient, id, recipientToken)
		yield put(recipientActions.getMyRecipientFulfilled(data))
	} catch (error) {
		yield put(recipientActions.getMyRecipientRejected(error))
	}
}

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
	yield takeEvery(recipientActions.GET_PACKAGE_RECIPIENTS, getRecipients)
	yield takeEvery(recipientActions.CREATE_PACKAGE_RECIPIENT, createRecipient)
	yield takeEvery(recipientActions.UPDATE_PACKAGE_RECIPIENT, updateRecipient)
	yield takeEvery(recipientActions.DELETE_PACKAGE_RECIPIENT, deleteRecipient)
	yield takeEvery(recipientActions.GET_MY_RECIPIENT, getMyRecipient)
}
