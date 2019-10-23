import { Document, Error, PaginatedApiResponse } from '../../types'

const types = {
	GET_DOCUMENTS: '[documents] GET_DOCUMENTS',
	GET_DOCUMENTS_INITIAL_STATE: '[documents] GET_DOCUMENTS_INITIAL_STATE',
	GET_DOCUMENTS_LOADING: '[documents] GET_DOCUMENTS_LOADING',
	GET_DOCUMENTS_FULFILLED: '[documents] GET_DOCUMENTS_FULFILLED',
	GET_DOCUMENTS_REJECTED: '[documents] GET_DOCUMENTS_REJECTED',

	DOWNLOAD_DOCUMENT: '[documents] DOWNLOAD_DOCUMENT',
	DOWNLOAD_DOCUMENT_INITIAL_STATE: '[documents] DOWNLOAD_DOCUMENT_INITIAL_STATE',
	DOWNLOAD_DOCUMENT_LOADING: '[documents] DOWNLOAD_DOCUMENT_LOADING',
	DOWNLOAD_DOCUMENT_FULFILLED: '[documents] DOWNLOAD_DOCUMENT_FULFILLED',
	DOWNLOAD_DOCUMENT_REJECTED: '[documents] DOWNLOAD_DOCUMENT_REJECTED',
}

export const documentActions = {
	...types,
	getDocuments: (payload = {}) => ({
		type: types.GET_DOCUMENTS,
		payload,
	}),
	getDocumentsInitialState: () => ({
		type: types.GET_DOCUMENTS_INITIAL_STATE,
		payload: null,
	}),
	getDocumentsLoading: () => ({
		type: types.GET_DOCUMENTS_LOADING,
		payload: null,
	}),
	getDocumentsFulfilled: (payload: PaginatedApiResponse<Document>) => ({
		type: types.GET_DOCUMENTS_FULFILLED,
		payload,
	}),
	getDocumentsRejected: (response) => ({
		type: types.GET_DOCUMENTS_REJECTED,
		payload: response,
	}),

	downloadDocument: (payload: Document, preview = false) => ({
		type: types.DOWNLOAD_DOCUMENT,
		payload,
		preview,
	}),
	downloadDocumentInitialState: () => ({
		type: types.DOWNLOAD_DOCUMENT_INITIAL_STATE,
		payload: null,
	}),
	downloadDocumentLoading: () => ({
		type: types.DOWNLOAD_DOCUMENT_LOADING,
		payload: null,
	}),
	downloadDocumentFulfilled: (payload?) => ({
		type: types.DOWNLOAD_DOCUMENT_FULFILLED,
		payload,
	}),
	downloadDocumentRejected: (payload: Error) => ({
		type: types.DOWNLOAD_DOCUMENT_REJECTED,
		payload,
	}),
}
