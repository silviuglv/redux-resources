import axios from 'axios'
import config from '../config'
import { GetAccountInvitesRequest, CreateAccountInviteRequest } from '../types'

export const accountInviteApi = {
	getAccountInvites: (params: GetAccountInvitesRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/account_invites`,
			method: 'GET',
			params,
		})
	},
	showAccountInvite: (id: string, accountInviteToken?: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/account_invites/${
				config.dev_env === true ? config.mockData.account_id : id
			}`,
			method: 'GET',
			headers: accountInviteToken ? { AccountInviteToken: accountInviteToken } : {},
		})
	},
	deleteAccountInvite: (id: string, accountInviteToken?: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/account_invites/${
				config.dev_env === true ? config.mockData.account_id : id
			}`,
			method: 'DELETE',
			headers: accountInviteToken ? { AccountInviteToken: accountInviteToken } : {},
		})
	},
	create: (data: CreateAccountInviteRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/account_invites`,
			method: 'POST',
			data,
		})
	},
	accept: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/account_invites/${
				config.dev_env === true ? config.mockData.account_id : id
			}/accept`,
			method: 'PUT',
		})
	},
}
