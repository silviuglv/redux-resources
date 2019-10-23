import axios from 'axios'
import config from '../config'
import { GetFieldTypesRequest } from '../types'

export const fieldTypeApi = {
	getFieldTypes: (params: GetFieldTypesRequest = {}) => {
		return axios({
			url: `${config.apiBase}/field_types`,
			method: 'GET',
			params,
		})
	},
}
