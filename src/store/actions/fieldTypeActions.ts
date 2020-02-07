import {
	Error,
	FieldType,
	FieldTypePreset,
	GetFieldTypesRequest,
	GetPresetsRequest,
	CreatePresetRequest,
	UpdatePresetRequest,
	PaginatedApiResponse,
	Account,
} from '../../types'

const types = {
	GET_FIELD_TYPES: '[fieldTypes] GET_FIELD_TYPES',
	FIELD_TYPES_LOADING: '[fieldTypes] FIELD_TYPES_LOADING',
	FIELD_TYPES_FULFILLED: '[fieldTypes] FIELD_TYPES_FULFILLED',
	SET_FIELD_TYPES_REJECTED: '[fieldTypes] SET_FIELD_TYPES_REJECTED',

	GET_PRESETS: '[fieldTypes] GET_PRESETS',
	PRESETS_INITIAL_STATE: '[fieldTypes] PRESETS_INITIAL_STATE',
	PRESETS_LOADING: '[fieldTypes] PRESETS_LOADING',
	PRESETS_FULFILLED: '[fieldTypes] PRESETS_FULFILLED',
	SET_PRESETS_REJECTED: '[fieldTypes] SET_PRESETS_REJECTED',

	UPDATE_PRESET: '[fieldTypes] UPDATE_PRESET',
	UPDATE_PRESET_INITIAL_STATE: '[fieldTypes] UPDATE_PRESET_INITIAL_STATE',
	UPDATE_PRESET_LOADING: '[fieldTypes] UPDATE_PRESET_LOADING',
	UPDATE_PRESET_FULFILLED: '[fieldTypes] UPDATE_PRESET_FULFILLED',
	UPDATE_PRESET_REJECTED: '[fieldTypes] UPDATE_PRESET_REJECTED',

	CREATE_PRESET: '[fieldTypes] CREATE_PRESET',
	CREATE_PRESET_INITIAL_STATE: '[fieldTypes] CREATE_PRESET_INITIAL_STATE',
	CREATE_PRESET_LOADING: '[fieldTypes] CREATE_PRESET_LOADING',
	CREATE_PRESET_FULFILLED: '[fieldTypes] CREATE_PRESET_FULFILLED',
	CREATE_PRESET_REJECTED: '[fieldTypes] CREATE_PRESET_REJECTED',

	DELETE_PRESET: '[fieldTypes] DELETE_PRESET',
	DELETE_PRESET_INITIAL_STATE: '[fieldTypes] DELETE_PRESET_INITIAL_STATE',
	DELETE_PRESET_LOADING: '[fieldTypes] DELETE_PRESET_LOADING',
	DELETE_PRESET_FULFILLED: '[fieldTypes] DELETE_PRESET_FULFILLED',
	DELETE_PRESET_REJECTED: '[fieldTypes] DELETE_PRESET_REJECTED',
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

	//getPresetPresets
	getPresets: (field_type_id: string, payload: GetPresetsRequest) => ({
		type: types.GET_PRESETS,
		field_type_id,
		payload,
	}),
	getPresetsInitialState: () => ({
		type: types.PRESETS_INITIAL_STATE,
		payload: null,
	}),
	setPresetsLoading: () => ({
		type: types.PRESETS_LOADING,
		payload: null,
	}),
	setPresetsFulfilled: (payload: PaginatedApiResponse<FieldTypePreset>) => ({
		type: types.PRESETS_FULFILLED,
		payload,
	}),
	setPresetsRejected: (payload: Error) => ({
		type: types.SET_PRESETS_REJECTED,
		payload,
	}),
	createPreset: (payload: CreatePresetRequest, successCb?, errorCb?) => ({
		type: types.CREATE_PRESET,
		payload,
		successCb,
		errorCb,
	}),
	createPresetInitialState: () => ({
		type: types.CREATE_PRESET_INITIAL_STATE,
		payload: null,
	}),
	createPresetLoading: () => ({
		type: types.CREATE_PRESET_LOADING,
		payload: null,
	}),
	createPresetFulfilled: (payload: FieldTypePreset) => ({
		type: types.CREATE_PRESET_FULFILLED,
		payload,
	}),
	createPresetRejected: (payload: Error) => ({
		type: types.CREATE_PRESET_REJECTED,
		payload,
	}),
	//UPDATE_PRESET
	updatePreset: (preset_id: string, payload: FieldTypePreset, successCb?, errorCb?) => ({
		type: types.UPDATE_PRESET,
		preset_id,
		payload,
		successCb,
		errorCb,
	}),
	updatePresetInitialState: () => ({
		type: types.UPDATE_PRESET_INITIAL_STATE,
		payload: null,
	}),
	updatePresetLoading: () => ({
		type: types.UPDATE_PRESET_LOADING,
		payload: null,
	}),
	updatePresetFulfilled: (payload: FieldTypePreset) => ({
		type: types.UPDATE_PRESET_FULFILLED,
		payload,
	}),
	updatePresetRejected: (payload: Error) => ({
		type: types.UPDATE_PRESET_REJECTED,
		payload,
	}),
	//DELETE_PRESET
	deletePreset: (preset_id: string, field_type_id: string, successCb?, errorCb?) => ({
		type: types.DELETE_PRESET,
		preset_id,
		field_type_id,
		successCb,
		errorCb,
	}),
	deletePresetInitialState: () => ({
		type: types.DELETE_PRESET_INITIAL_STATE,
		payload: null,
	}),
	deletePresetLoading: () => ({
		type: types.DELETE_PRESET_LOADING,
		payload: null,
	}),
	deletePresetFulfilled: () => ({
		type: types.DELETE_PRESET_FULFILLED,
		payload: null,
	}),
	deletePresetRejected: (payload: Error) => ({
		type: types.DELETE_PRESET_REJECTED,
		payload,
	}),
}
