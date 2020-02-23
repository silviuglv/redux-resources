import axios from 'axios'
import config from '../config'
import { GetFieldsRequest, CreateFieldRequest, UpdateFieldRequest } from '../types'

export const fieldApi = {
	getFields: (package_id: string, params: GetFieldsRequest = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/fields`,
			method: 'GET',
			params,
		})
	},
	createField: (package_id: string, data: CreateFieldRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/fields`,
			method: 'POST',
			data,
		})
	},
	updateField: (package_id: string, field_id: string, data: UpdateFieldRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/fields/${config.dev_env === true ? config.mockData.field_id : field_id}`,
			method: 'PUT',
			data,
		})
	},
	deleteField: (package_id: string, field_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/fields/${config.dev_env === true ? config.mockData.field_id : field_id}`,
			method: 'DELETE',
		})
	},
}
