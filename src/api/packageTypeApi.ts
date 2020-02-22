import axios from 'axios'
import config from '../config'
import { GetPackageTypesRequest } from '../types'

export const packageTypeApi = {
	getPackageTypes: (params: GetPackageTypesRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/package-types`,
			method: 'GET',
			params,
		})
	},
}
