import axios from 'axios'
import config from '../config'
import { GetPackageStatusesRequest } from '../types'

export const packageStatusApi = {
	getPackageStatuses: (params: GetPackageStatusesRequest) => {
		return axios({
			url: `${config.apiBase}/package_statuses`,
			method: 'GET',
			params,
		})
	},
}
