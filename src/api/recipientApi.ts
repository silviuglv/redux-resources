import axios from 'axios'
import config from '../config'
import { MessageSenderRequest } from '../types'

export const recipientApi = {
	getRecipientTypes: () => {
		return axios({
			url: `${config.apiBase}/recipients/recipient_types`,
			method: 'GET',
		})
	},
	decline: (recipient_id: string) => {
		return axios({
			url: `${config.apiBase}/recipients/${recipient_id}/decline`,
			method: 'POST',
		})
	},
	messageSender: (recipient_id: string, data: MessageSenderRequest) => {
		return axios({
			url: `${config.apiBase}/recpients/${recipient_id}/message_sender`,
			method: 'POST',
			data,
		})
	},
	completePackage: (recipient_id: string) => {
		return axios({
			url: `${config.apiBase}/recpients/${recipient_id}/complete`,
			method: 'POST',
		})
	},
}
