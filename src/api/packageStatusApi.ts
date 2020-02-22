import axios from 'axios'
import config from '../config'
import { GetPackageStatusesRequest } from '../types'

export const packageStatusApi = {
	getPackageStatuses: (params: GetPackageStatusesRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/package_statuses`,
			method: 'GET',
			params,
		})
	},
}
