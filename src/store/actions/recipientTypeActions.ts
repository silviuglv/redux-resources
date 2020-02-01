import { Error, GetRecipientTypesRequest, RecipientType, PaginatedApiResponse } from '../../types'

const types = {
	GET_RECIPIENT_TYPES: '[recipientTypes] GET_RECIPIENT_TYPES',
	RECIPIENT_TYPES_LOADING: '[recipientTypes] RECIPIENT_TYPES_LOADING',
	RECIPIENT_TYPES_FULFILLED: '[recipientTypes] RECIPIENT_TYPES_FULFILLED',
	SET_RECIPIENT_TYPES_REJECTED: '[recipientTypes] SET_RECIPIENT_TYPES_REJECTED',
}

export const recipientTypeActions = {
	...types,
	getRecipientTypes: () => ({
		type: types.GET_RECIPIENT_TYPES,
	}),
	setRecipientTypesLoading: () => ({
		type: types.RECIPIENT_TYPES_LOADING,
		payload: null,
	}),
	setRecipientTypesFulfilled: (payload: PaginatedApiResponse<RecipientType>) => ({
		type: types.RECIPIENT_TYPES_FULFILLED,
		payload,
	}),
	setRecipientTypesRejected: (payload: Error) => ({
		type: types.SET_RECIPIENT_TYPES_REJECTED,
		payload,
	}),
}
