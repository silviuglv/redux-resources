import axios from 'axios'
import config from '../config'
import {
	CreateUserFromAccountInviteRequest,
	CreateUserRequest,
	UpdateNotificationPreferencesRequest,
	UpdatePasswordRequest,
	UpdateUserRequest,
} from '../types'

export const userApi = {
	createUser: (data: CreateUserRequest) => {
		return axios({
			url: `${config.apiBase}/users`,
			method: 'POST',
			data,
		})
	},
	createUserFromAccountInvite: (data: CreateUserFromAccountInviteRequest) => {
		return axios({
			url: `${config.apiBase}/users/account_invite`,
			method: 'POST',
			data,
		})
	},
	me: () => {
		return axios({
			url: `${config.apiBase}/users/me`,
			method: 'GET',
		})
	},
	getUserMeta: (userId: string) => {
		return axios({
			url: `${config.apiBase}/users/${userId}/meta`,
			method: 'GET',
		})
	},
	updateUser: (id: string, data: UpdateUserRequest) => {
		return axios({
			url: `${config.apiBase}/users/${id}`,
			method: 'PUT',
			data,
		})
	},
	updateUserPassword: (id: string, data: UpdatePasswordRequest) => {
		return axios({
			url: `${config.apiBase}/users/${id}/password`,
			method: 'PUT',
			data,
		})
	},
	resendEmailConfirmation: () => {
		return axios({
			url: `${config.apiBase}/users/email_confirmation`,
			method: 'GET',
		})
	},
	getNotificationPreferences: (id: string) => {
		return axios({
			url: `${config.apiBase}/users/${id}/notification_preferences`,
			method: 'GET',
		})
	},
	updateNotificationPreferences: (id: string, data: UpdateNotificationPreferencesRequest) => {
		return axios({
			url: `${config.apiBase}/users/${id}/notification_preferences`,
			method: 'PUT',
			data,
		})
	},
	updatePicture: (id: string, data: any) => {
		return axios({
			url: `${config.apiBase}/users/${id}/picture`,
			method: 'POST',
			data,
		})
	},
	confirmEmail: (token: string) => {
		return axios({
			url: `${config.apiBase}/users/email_confirmation/${token}`,
			method: 'PUT',
		})
	},
}
