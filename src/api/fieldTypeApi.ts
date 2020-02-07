import axios from 'axios'
import config from '../config'
import { GetFieldTypesRequest, GetPresetsRequest, CreatePresetRequest, UpdatePresetRequest } from '../types'

export const fieldTypeApi = {
	getFieldTypes: (params: GetFieldTypesRequest = {}) => {
		return axios({
			url: `${config.apiBase}/field_types`,
			method: 'GET',
			params,
		})
	},
	getPresets: (field_type_id: string, params: GetPresetsRequest = {}) => {
		return axios({
			url: `${config.apiBase}/field_types/${field_type_id}/presets`,
			method: 'GET',
			params,
		})
	},
	createPreset: (params: CreatePresetRequest) => {
		return axios({
			url: `${config.apiBase}/field_types/presets`,
			method: 'POST',
			params,
		})
	},
	updatePreset: (preset_id: string, params: UpdatePresetRequest) => {
		return axios({
			url: `${config.apiBase}/field_types/presets/${preset_id}`,
			method: 'PUT',
			params,
		})
	},
	deletePreset: (preset_id: string) => {
		return axios({
			url: `${config.apiBase}/field_types/presets/${preset_id}`,
			method: 'DELETE',
		})
	},
}
