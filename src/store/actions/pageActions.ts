import { Error, Page, PaginatedApiResponse } from '../../types'

const types = {
	GET_PAGES: '[pages] GET_PAGES',
	GET_PAGES_INITIAL_STATE: '[pages] GET_PAGES_INITIAL_STATE',
	GET_PAGES_LOADING: '[pages] GET_PAGES_LOADING',
	GET_PAGES_FULFILLED: '[pages] GET_PAGES_FULFILLED',
	GET_PAGES_REJECTED: '[pages] GET_PAGES_REJECTED',
	GET_PAGE_IMAGE: '[pages] GET_DOCUMENT_PAGE_IMAGE_URL',
	SET_PAGE_IMAGE: '[pages] SET_DOCUMENT_PAGE_IMAGE_URL',
}

export const pageActions = {
	...types,
	getPages: (packageId: string, documentId: string, successCb?, errorCb?) => ({
		type: types.GET_PAGES,
		payload: null,
		packageId,
		documentId,
		successCb,
		errorCb,
	}),
	getPagesInitialState: () => ({
		type: types.GET_PAGES_INITIAL_STATE,
		payload: null,
	}),
	getPagesLoading: () => ({
		type: types.GET_PAGES_LOADING,
		payload: null,
	}),
	getPagesFulfilled: (payload: PaginatedApiResponse<Page>) => ({
		type: types.GET_PAGES_FULFILLED,
		payload,
	}),
	getPagesRejected: (payload: Error) => ({
		type: types.GET_PAGES_REJECTED,
		payload,
	}),
	getPageImage: (pageId: string, image_url: string, successCb?, errorCb?) => ({
		type: types.GET_PAGE_IMAGE,
		payload: null,
		pageId,
		image_url,
		successCb,
		errorCb,
	}),
	setPageImage: (pageId: string, payload) => ({
		type: types.SET_PAGE_IMAGE,
		payload,
		pageId,
	}),
}
