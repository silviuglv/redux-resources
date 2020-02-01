import axios from 'axios'
import config from '../config'
import { keysToSnakeCase } from '../utilities'
import {
	MessageSenderRequest,
	GetRecipientTypesRequest,
	CreateRecipientRequest,
	UpdateRecipientRequest,
} from '../types'

export const recipientApi = {
	getRecipients: (id: string, params: any = {}) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients`,
			method: 'GET',
			params,
		})
	},
	createRecipient: (id: string, data: CreateRecipientRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients`,
			method: 'POST',
			data: keysToSnakeCase(data),
		})
	},
	getMyRecipient: (id: string, recipientToken: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients/me`,
			method: 'GET',
			headers: {
				Recipient: recipientToken,
			},
		})
	},
	updateRecipient: (id: string, recipientId: string, data: UpdateRecipientRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients/${recipientId}`,
			method: 'PUT',
			data: keysToSnakeCase(data),
		})
	},
	deleteRecipient: (id: string, recipientId: string) => {
		return axios({
			url: `${config.apiBase}/packages/${id}/recipients/${recipientId}`,
			method: 'DELETE',
		})
	},
	getRecipientTypes: () => {
		return axios({
			url: `${config.apiBase}/recipient_types`,
			method: 'GET',
		})
	},
	validateRecipient: (token: string) => {
		return axios({
			url: `${config.apiBase}/oauth/token/${token}`,
			method: 'GET',
		})
	},
	declineSignature: (package_id: string, recipient_id: string) => {
		return axios({
			url: `${config.apiBase}/packages/${package_id}/recipients/${recipient_id}/decline`,
			method: 'POST',
		})
	},
	messageSender: (package_id: string, recipient_id: string, data: MessageSenderRequest) => {
		return axios({
			url: `${config.apiBase}/packages/${package_id}/recpients/${recipient_id}/message`,
			method: 'POST',
			data,
		})
	},
}
