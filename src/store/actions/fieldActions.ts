import {
	CreateFieldRequest,
	Error,
	Field,
	GetFieldsRequest,
	PaginatedApiResponse,
	UpdateFieldRequest,
} from '../../types'

const types = {
	GET_FIELDS: '[fields] GET_FIELDS',
	GET_FIELDS_INITIAL_STATE: '[fields] GET_FIELDS_INITIAL_STATE',
	GET_FIELDS_LOADING: '[fields] GET_FIELDS_LOADING',
	GET_FIELDS_FULFILLED: '[fields] GET_FIELDS_FULFILLED',
	GET_FIELDS_REJECTED: '[fields] GET_FIELDS_REJECTED',

	CREATE_FIELD: '[fields] CREATE_FIELD',
	UPDATE_FIELD: '[fields] UPDATE_FIELD',
	DELETE_FIELD: '[fields] DELETE_FIELD',

	SET_ITEM_LOADING: '[fields] SET_ITEM_LOADING',
	SET_ITEM_FULFILLED: '[fields] SET_ITEM_FULFILLED',
	SET_ITEM_REJECTED: '[fields] SET_ITEM_REJECTED',

	ADD_ITEM_TO_LIST: '[fields] ADD_ITEM_TO_LIST',
	UPDATE_ITEM_IN_LIST: '[fields] UPDATE_ITEM_IN_LIST',
	REMOVE_ITEM_IN_LIST: '[fields] REMOVE_ITEM_IN_LIST',
}

export const fieldActions = {
	...types,
	getFields: (packageId: string, payload: GetFieldsRequest = {}, successCb?, errorCb?) => ({
		type: types.GET_FIELDS,
		payload,
		packageId,
		successCb,
		errorCb,
	}),
	getFieldsInitialState: () => ({
		type: types.GET_FIELDS_INITIAL_STATE,
		payload: null,
	}),
	getFieldsLoading: () => ({
		type: types.GET_FIELDS_LOADING,
		payload: null,
	}),
	getFieldsFulfilled: (payload: PaginatedApiResponse<Field>) => ({
		type: types.GET_FIELDS_FULFILLED,
		payload,
	}),
	getFieldsRejected: (payload: Error) => ({
		type: types.GET_FIELDS_REJECTED,
		payload,
	}),

	createField: (packageId: string, payload: CreateFieldRequest, successCb?, errorCb?) => ({
		type: types.CREATE_FIELD,
		payload,
		packageId,
		successCb,
		errorCb,
	}),
	updateField: (packageId: string, fieldId: string, payload: UpdateFieldRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_FIELD,
		payload,
		packageId,
		fieldId,
		successCb,
		errorCb,
	}),
	deleteField: (packageId: string, fieldId: string, successCb?, errorCb?) => ({
		type: types.DELETE_FIELD,
		payload: null,
		packageId,
		fieldId,
		successCb,
		errorCb,
	}),

	setItemLoading: () => ({
		type: types.SET_ITEM_LOADING,
		payload: null,
	}),
	setItemFulfilled: (payload: Field) => ({
		type: types.SET_ITEM_FULFILLED,
		payload,
	}),
	setItemRejected: (payload: Error) => ({
		type: types.SET_ITEM_REJECTED,
		payload,
	}),

	addItemToList: (payload: Field) => ({
		type: types.ADD_ITEM_TO_LIST,
		payload,
	}),
	updateItemInList: (payload: Field) => ({
		type: types.UPDATE_ITEM_IN_LIST,
		payload,
	}),
	removeItemInList: (fieldId: string) => ({
		type: types.REMOVE_ITEM_IN_LIST,
		fieldId,
	}),
}
