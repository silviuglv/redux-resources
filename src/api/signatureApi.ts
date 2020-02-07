import axios from 'axios'
import config from '../config'
import { CreateSignatureRequest } from '../types'

export const signatureApi = {
	getSignatures: (params: any = {}) => {
		return axios({
			url: `https://56ad06ad-d9f6-49f8-9901-9d1fe52f1ed0.mock.pstmn.io`,
			//			url: `${config.apiBase}/signatures`,
			method: 'GET',
			params,
		})
	},
	createSignature: (data: CreateSignatureRequest) => {
		return axios({
			url: `https://56ad06ad-d9f6-49f8-9901-9d1fe52f1ed0.mock.pstmn.io`,
			//			url: `${config.apiBase}/signatures`,
			method: 'POST',
			data,
		})
	},
}
