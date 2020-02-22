import axios from 'axios'
import config from '../config'
import { CreateSignatureRequest } from '../types'

export const signatureApi = {
	getSignatures: (params: any = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/signatures`,
			method: 'GET',
			params,
		})
	},
	createSignature: (data: CreateSignatureRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/signatures`,
			method: 'POST',
			data,
		})
	},
}
