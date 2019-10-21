import axios from 'axios'
import config from '../config'

export const fieldTypeApi = {
	getFieldTypes: (params = {}) => {
		return axios({
			url: `${config.apiBase}/field_types`,
			method: 'GET',
			params,
		})
	},
}
