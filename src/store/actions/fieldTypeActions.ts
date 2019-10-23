import { Error, FieldType, GetFieldTypesRequest, PaginatedApiResponse } from '../../types'

const types = {
	GET_FIELD_TYPES: '[fieldTypes] GET_FIELD_TYPES',
	FIELD_TYPES_LOADING: '[fieldTypes] FIELD_TYPES_LOADING',
	FIELD_TYPES_FULFILLED: '[fieldTypes] FIELD_TYPES_FULFILLED',
	SET_FIELD_TYPES_REJECTED: '[fieldTypes] SET_FIELD_TYPES_REJECTED',
}

export const fieldTypeActions = {
	...types,
	getFieldTypes: (payload: GetFieldTypesRequest = {}) => ({
		type: types.GET_FIELD_TYPES,
		payload,
	}),
	setFieldTypesLoading: () => ({
		type: types.FIELD_TYPES_LOADING,
		payload: null,
	}),
	setFieldTypesFulfilled: (payload: PaginatedApiResponse<FieldType>) => ({
		type: types.FIELD_TYPES_FULFILLED,
		payload,
	}),
	setFieldTypesRejected: (payload: Error) => ({
		type: types.SET_FIELD_TYPES_REJECTED,
		payload,
	}),
}
