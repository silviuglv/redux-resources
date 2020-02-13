import { CreateSignatureRequest, Error, PaginatedApiResponse, Signature } from '../../types'

const types = {
	GET_SIGNATURES: '[signatures] GET_SIGNATURES',
	SIGNATURES_LOADING: '[signatures] SIGNATURES_LOADING',
	SIGNATURES_FULFILLED: '[signatures] SIGNATURES_FULFILLED',
	SET_SIGNATURES_REJECTED: '[signatures] SET_SIGNATURES_REJECTED',

	CREATE_SIGNATURE: '[signatures] CREATE_SIGNATURE',
	CREATE_SIGNATURE_LOADING: '[signatures] CREATE_SIGNATURE_LOADING',
	CREATE_SIGNATURE_FULFILLED: '[signatures] CREATE_SIGNATURE_FULFILLED',
	CREATE_SIGNATURE_REJECTED: '[signatures] CREATE_SIGNATURE_REJECTED',
}

export const signatureActions = {
	...types,
	getSignatures: () => ({
		type: types.GET_SIGNATURES,
		payload: null,
	}),
	setSignaturesLoading: () => ({
		type: types.SIGNATURES_LOADING,
		payload: null,
	}),
	setSignaturesFulfilled: (payload: PaginatedApiResponse<Signature>) => ({
		type: types.SIGNATURES_FULFILLED,
		payload,
	}),
	setSignaturesRejected: (payload: Error) => ({
		type: types.SET_SIGNATURES_REJECTED,
		payload,
	}),

	createSignature: (recipient_id: string, payload: CreateSignatureRequest, successCb?, errorCb?) => ({
		type: types.CREATE_SIGNATURE,
		payload,
		recipient_id,
		successCb,
		errorCb,
	}),
	setCreateSignatureLoading: () => ({
		type: types.CREATE_SIGNATURE_LOADING,
		payload: null,
	}),
	setCreateSignatureFulfilled: (payload: Signature) => ({
		type: types.CREATE_SIGNATURE_FULFILLED,
		payload,
	}),
	setCreateSignatureRejected: (payload: Error) => ({
		type: types.CREATE_SIGNATURE_REJECTED,
		payload,
	}),
}
