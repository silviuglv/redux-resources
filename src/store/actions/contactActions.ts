import { Error, GetContactsRequest, NormalizedContact, PaginatedApiResponse } from '../../types'

const types = {
	SEARCH_CONTACTS: '[contacts] SEARCH_CONTACTS',
	SEARCH_LOADING: '[contacts] SEARCH_LOADING',
	SEARCH_FULFILLED: '[contacts] SEARCH_FULFILLED',
	SEARCH_REJECTED: '[contacts] SEARCH_REJECTED',
}

export const contactActions = {
	...types,
	searchContacts: (payload: GetContactsRequest, successCb?, errorCb?) => ({
		type: types.SEARCH_CONTACTS,
		payload,
		successCb,
		errorCb,
	}),
	setSearchContactsLoading: () => ({
		type: types.SEARCH_LOADING,
		payload: null,
	}),
	setSearchContactsFulfilled: (payload: PaginatedApiResponse<NormalizedContact>) => ({
		type: types.SEARCH_FULFILLED,
		payload,
	}),
	setSearchContactsRejected: (payload: Error) => ({
		type: types.SEARCH_REJECTED,
		payload,
	}),
}
