import axios from 'axios'
import config from '../config'
import { GetFieldsRequest, CreateFieldRequest, UpdateFieldRequest } from '../types'

export const fieldApi = {
	getFields: (packageId: string, params: GetFieldsRequest = {}) => {
		return axios({
			url: `${config.apiMock}/packages/${packageId}/fields`,
			method: 'GET',
			params,
		})
	},
	createField: (packageId: string, data: CreateFieldRequest) => {
		return axios({
			url: `${config.apiMock}/packages/${packageId}/fields`,
			method: 'POST',
			data,
		})
	},
	updateField: (packageId: string, fieldId: string, data: UpdateFieldRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields/${fieldId}`,
			method: 'PUT',
			data,
		})
	},
	deleteField: (packageId: string, fieldId: string) => {
		return axios({
			url: `${config.apiBase}/packages/${packageId}/fields/${fieldId}`,
			method: 'DELETE',
		})
	},
}
