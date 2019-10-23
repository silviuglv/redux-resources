import { signatureActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { signatureApi } from '../../api'
import { AnyAction } from 'redux'

function* getSignatures() {
	try {
		yield put(signatureActions.setSignaturesLoading())
		const { data } = yield call(signatureApi.getSignatures)
		yield put(signatureActions.setSignaturesFulfilled(data))
	} catch (error) {
		yield put(signatureActions.setSignaturesRejected(error))
	}
}

function* createSignature({ payload }: AnyAction) {
	try {
		yield put(signatureActions.setCreateSignatureLoading())
		const { data } = yield call(signatureApi.createSignature, payload)
		yield put(signatureActions.setCreateSignatureFulfilled(data))
		yield call(getSignatures)
	} catch (error) {
		yield put(signatureActions.setCreateSignatureRejected(error))
	}
}

export function* signatures() {
	yield takeEvery(signatureActions.GET_SIGNATURES, getSignatures)
	yield takeEvery(signatureActions.CREATE_SIGNATURE, createSignature)
}
