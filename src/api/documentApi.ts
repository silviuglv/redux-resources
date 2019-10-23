import axios from 'axios'
import config from '../config'
import { ProviderTypes } from '../types'

export const documentApi = {
	getDocuments: (params = {}) => {
		return axios({
			url: `${config.apiBase}/documents`,
			method: 'GET',
			params,
		})
	},
	downloadDocument: (id: string, provider: ProviderTypes) => {
		return axios({
			url: `${config.apiBase}/documents/${id}`,
			method: 'GET',
			headers: { Accept: 'application/pdf' },
			responseType: 'blob',
			params: { provider },
		})
	},
}
