import axios from 'axios'
import config from '../config'
import { GetNotificationsRequest, UpdateNotificationRequest } from '../types'

export const notificationApi = {
	getNotifications: (params: GetNotificationsRequest = {}) => {
		return axios({
			url: `${config.apiBase}/notifications`,
			method: 'GET',
			params,
		})
	},
	deleteNotification: (id: string, data: any) => {
		return axios({
			url: `${config.apiBase}/notifications/${id}`,
			method: 'PUT',
			data,
		})
	},
	update: (id: string, data: UpdateNotificationRequest) => {
		return axios({
			url: `${config.apiBase}/notifications/${id}`,
			method: 'PUT',
			data,
		})
	},
}
