import axios from 'axios'
import config from '../config'

export const packageTypeApi = {
	getPackageTypes: (params) => {
		return axios({
			url: `${config.apiBase}/package_types`,
			method: 'GET',
			params,
		})
	},
}
