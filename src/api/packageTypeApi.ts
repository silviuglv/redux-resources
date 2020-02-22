import axios from 'axios'
import config from '../config'
import { GetPackageTypesRequest } from '../types'

export const packageTypeApi = {
	getPackageTypes: (params: GetPackageTypesRequest) => {
		return axios({
			url: `${config.apiBase}/package-types`,
			method: 'GET',
			params,
		})
	},
}
