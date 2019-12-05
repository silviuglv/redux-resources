import axios from 'axios'
import config from '../config'
import {
	GetAccountsRequest,
	GetAccountUsersRequest,
	CreateAccountRequest,
	UpdateAccountUserRequest,
	UpdateAccountRequest,
} from '../types'

export const accountApi = {
	getAccounts: (params: GetAccountsRequest = {}) => {
		return axios({
			url: `${config.apiBase}/accounts`,
			method: 'GET',
			params,
		})
	},
	getDefaultAccount: () => {
		return axios({
			url: `${config.apiBase}/accounts/default`,
			method: 'GET',
		})
	},
	setDefaultAccount: (id: string) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/default`,
			method: 'PUT',
		})
	},
	getUsers: (id: string, params: GetAccountUsersRequest) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/users`,
			method: 'GET',
			params,
		})
	},
	create: (data: CreateAccountRequest) => {
		return axios({
			url: `${config.apiBase}/accounts`,
			method: 'POST',
			data,
		})
	},
	show: (id: string) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}`,
			method: 'GET',
		})
	},
	deleteAccountMember: (id: string, userId: string) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/users/${userId}`,
			method: 'DELETE',
		})
	},
	updateAccountMember: (id: string, userId: string, data: UpdateAccountUserRequest) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/users/${userId}`,
			method: 'PUT',
			data,
		})
	},
	update: (id: string, data: UpdateAccountRequest) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}`,
			method: 'PUT',
			data,
		})
	},
	updatePicture: (id: string, data: any) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/picture`,
			method: 'POST',
			data,
		})
	},
	updateBanner: (id: string, data: any) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/banner`,
			method: 'POST',
			data,
		})
	},
	getInvoices: (id: string) => {
		return axios({
			url: `${config.apiBase}/accounts/${id}/invoices`,
			method: 'GET',
		})
	},
}
