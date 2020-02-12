import { recipientActions, packageActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { recipientApi } from '../../api'
import { AnyAction } from 'redux'

function* complete({ package_id, recipient_id, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.completeInitialState())
		yield put(recipientActions.completeLoading())
		const { data } = yield call(recipientApi.completePackage, package_id, recipient_id)
		yield put(recipientActions.completeFulfilled(data))
		yield call(packageActions.getPackageRecipients, package_id)
		//	yield call(recipientActions.getRecipients, package_id)
		successCb && successCb()
	} catch (error) {
		yield put(recipientActions.completeRejected(error))
		errorCb && errorCb()
	}
}

function* decline({ package_id, recipient_id, successCb, errorCb }: AnyAction) {
	try {
		yield put(recipientActions.declineInitialState())
		yield put(recipientActions.declineLoading())
		const { data } = yield call(recipientApi.decline, package_id, recipient_id)
		yield put(recipientActions.declineFulfilled(data))
		yield call(packageActions.getPackageRecipients, package_id)
		successCb && successCb()
	} catch (error) {
		yield put(recipientActions.declineRejected(error))
		errorCb && errorCb()
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

function* updatePhoto({ id, payload, successCb, errorCb }: any) {
	try {
		yield put(recipientActions.updateRecipientPhotoInitialState())
		yield put(recipientActions.updateRecipientPhotoLoading())
		const { data } = yield call(recipientApi.updatePhoto, id, payload)
		yield put(recipientActions.updateRecipientPhotoFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Profile photo updated!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(recipientActions.updateRecipientPhotoRejected(error))
		errorCb !== undefined && errorCb()
	}
}

export function* recipients() {
	yield takeEvery(recipientActions.COMPLETE, complete)
	yield takeEvery(recipientActions.UPDATE_RECIPIENT_PHOTO, updatePhoto)
	yield takeEvery(recipientActions.SIGNATURE_DECLINED, decline)
	yield takeEvery(recipientActions.MESSAGE_SENDER, messageSender)
}
