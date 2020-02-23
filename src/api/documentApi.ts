import axios from 'axios'
import config from '../config'
import { ProviderTypes } from '../types'

export const documentApi = {
	getDocuments: (params = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/documents`,
			method: 'GET',
			params,
		})
	},
	downloadDocument: (id: string, provider: ProviderTypes) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/documents/${
				config.dev_env === true ? config.mockData.document_id : id
			}`,
			method: 'GET',
			headers: { Accept: 'application/pdf' },
			responseType: 'blob',
			params: { provider },
		})
	},
}
