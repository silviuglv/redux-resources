import axios from 'axios'
import config from '../config'
import { MessageSenderRequest } from '../types'

export const recipientApi = {
	getRecipientTypes: () => {
		return axios({
			//		url: `${config.apiBase}/recipients/recipient_types`,
			url: `${config.apiBase}/recipient_types`,
			method: 'GET',
		})
	},
	decline: (package_id: string, recipient_id: string) => {
		return axios({
			url: `${config.apiBase}/packages/${package_id}/recipients/${recipient_id}/decline`,
			method: 'POST',
		})
	},
	messageSender: (package_id: string, recipient_id: string, data: MessageSenderRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${package_id}/recpients/${recipient_id}/message_sender`,
			method: 'POST',
			data,
		})
	},
	completePackage: (package_id: string, recipient_id: string) => {
		return axios({
			url: `${config.apiMock}/packages/${package_id}/recpients/${recipient_id}/complete`,
			method: 'POST',
		})
	},
	updatePhoto: (id: string, data: any) => {
		return axios({
			url: `${config.apiMock}/recipients/${id}/picture`,
			method: 'POST',
			data,
		})
	},
}
