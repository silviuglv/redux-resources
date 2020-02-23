import axios from 'axios'
import config from '../config'
import { MessageSenderRequest } from '../types'

export const recipientApi = {
	getRecipientTypes: () => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/recipient-types`,
			method: 'GET',
		})
	},
	decline: (package_id: string, recipient_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/recipients/${config.dev_env === true ? config.mockData.recipient_id : recipient_id}/decline`,
			method: 'POST',
		})
	},
	messageSender: (package_id: string, recipient_id: string, data: MessageSenderRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/recipients/${config.dev_env === true ? config.mockData.recipient_id : recipient_id}/message_sender`,
			method: 'POST',
			data,
		})
	},
	completePackage: (package_id: string, recipient_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/recipients/${config.dev_env === true ? config.mockData.recipient_id : recipient_id}/complete`,
			method: 'POST',
		})
	},
	updatePhoto: (id: string, data: any) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/recipients/${
				config.dev_env === true ? config.mockData.recipient_id : id
			}/picture`,
			method: 'POST',
			data,
		})
	},
}
