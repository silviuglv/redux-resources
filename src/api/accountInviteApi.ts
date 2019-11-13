import axios from 'axios'
import config from '../config'
import { GetAccountInvitesRequest, CreateAccountInviteRequest } from '../types'

export const accountInviteApi = {
	getAccountInvites: (params: GetAccountInvitesRequest) => {
		return axios({
			url: `${config.apiBase}/account_invites`,
			method: 'GET',
			params,
		})
	},
	showAccountInvite: (id: string) => {
		return axios({
			url: `${config.apiBase}/account_invites/${id}`,
			method: 'GET',
			params,
		})
	},
	deleteAccountInvite: (id: string) => {
		return axios({
			url: `${config.apiBase}/account_invites/${id}`,
			method: 'DELETE',
		})
	},
	create: (data: CreateAccountInviteRequest) => {
		return axios({
			url: `${config.apiBase}/account_invites`,
			method: 'POST',
			data,
		})
	},
	accept: (id: string) => {
		return axios({
			url: `${config.apiBase}/account_invites/${id}/accept`,
			method: 'PUT',
		})
	},
}
