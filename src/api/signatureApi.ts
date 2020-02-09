import axios from 'axios'
import config from '../config'
import { CreateSignatureRequest } from '../types'

export const signatureApi = {
	getSignatures: (recipient_id: string, params: any = {}) => {
		return axios({
			url: `https://0d483f94-effd-4698-bd46-e6a440df7f9f.mock.pstmn.io/signatures/${recipient_id}`,
			//			url: `${config.apiBase}/signatures`,
			method: 'GET',
			params,
		})
	},
	createSignature: (recipient_id: string, data: CreateSignatureRequest) => {
		return axios({
			url: `https://0d483f94-effd-4698-bd46-e6a440df7f9f.mock.pstmn.io/signatures/${recipient_id}`,
			//			url: `${config.apiBase}/signatures`,
			method: 'POST',
			data,
		})
	},
}
