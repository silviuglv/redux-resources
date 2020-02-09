import { signatureActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { signatureApi } from '../../api'
import { AnyAction } from 'redux'

function* getSignatures({ recipient_id, successCb, errorCb }: AnyAction) {
	try {
		yield put(signatureActions.setSignaturesLoading())
		const { data } = yield call(signatureApi.getSignatures, recipient_id)
		yield put(signatureActions.setSignaturesFulfilled(data))
		successCb && successCb(data)
	} catch (error) {
		yield put(signatureActions.setSignaturesRejected(error))
		errorCb && errorCb()
	}
}

function* createSignature({ recipient_id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(signatureActions.setCreateSignatureLoading())
		const { data } = yield call(signatureApi.createSignature, payload)
		yield put(signatureActions.setCreateSignatureFulfilled(data))
		yield call(getSignatures, recipient_id)
		successCb && successCb(data)
	} catch (error) {
		yield put(signatureActions.setCreateSignatureRejected(error))
		errorCb && errorCb()
	}
}

//TODO: replaceSignature,

//TODO: deleteSignature

export function* signatures() {
	yield takeEvery(signatureActions.GET_SIGNATURES, getSignatures)
	yield takeEvery(signatureActions.CREATE_SIGNATURE, createSignature)
}
