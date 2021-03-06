import axios from 'axios'
import config from '../config'
import {
	GetAccountsRequest,
	GetAccountUsersRequest,
	CreateAccountRequest,
	UpdateAccountUserRequest,
	UpdateAccountRequest,
	GetAccountCustomizationsRequest,
	GetCustomizationTypesRequest,
	CreateCustomizationRequest,
	UpdateCustomizationRequest,
} from '../types'

export const accountApi = {
	getAccounts: (params: GetAccountsRequest = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts`,
			method: 'GET',
			params,
		})
	},
	getDefaultAccount: () => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/default`,
			method: 'GET',
		})
	},
	setDefaultAccount: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/default`,
			method: 'PUT',
		})
	},
	getUsers: (id: string, params: GetAccountUsersRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/users`,
			method: 'GET',
			params,
		})
	},
	create: (data: CreateAccountRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts`,
			method: 'POST',
			data,
		})
	},
	show: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}`,
			method: 'GET',
		})
	},
	deleteAccountMember: (id: string, userId: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/users/${userId}`,
			method: 'DELETE',
		})
	},
	updateAccountMember: (id: string, userId: string, data: UpdateAccountUserRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/users/${userId}`,
			method: 'PUT',
			data,
		})
	},
	update: (id: string, data: UpdateAccountRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}`,
			method: 'PUT',
			data,
		})
	},

	getInvoices: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/invoices`,
			method: 'GET',
		})
	},
	//BEGIN CUSTOMIZATIONS
	// get all customization types
	getCustomizationTypes: (id: string, data: GetCustomizationTypesRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations/types`,
			method: 'GET',
			data,
		})
	},
	//list all customizations for the account
	getAccountCustomizations: (id: string, data?: GetAccountCustomizationsRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations`,
			method: 'GET',
			data,
		})
	},
	//we want to be able to get a customization by its type_id because each account should only ever have one customization of a particular type,
	//and because that makes it a lot easier for developers the specific customization they're looking for without having to iterate through all customizations
	getCustomizationByType: (id: string, type_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations/types/${config.dev_env === true ? config.mockData.customization_type_id : type_id}`,
			method: 'GET',
		})
	},
	//we can use type here to update because customizations and customization types should be a one to one relationship for each account (only one customization per type)
	updateCustomizationByType: (id: string, type_id: string, data: UpdateCustomizationRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations/types/${config.dev_env === true ? config.mockData.customization_type_id : type_id}`,
			method: 'PUT',
			data,
		})
	},
	getCustomization: (id: string, customization_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations/${config.dev_env === true ? config.mockData.customization_id : customization_id}`,
			method: 'GET',
		})
	},
	//CreateCustomizationRequest: type_id: string, meta, file? (file is optional, depends on type_id)
	createCustomization: (id: string, data: CreateCustomizationRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations`,
			method: 'POST',
			data,
		})
	},
	deleteCustomization: (id: string, customization_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations/${config.dev_env === true ? config.mockData.customization_id : customization_id}`,
			method: 'DELETE',
		})
	},
	updateCustomization: (id: string, customization_id: string, data: UpdateCustomizationRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/accounts/${
				config.dev_env === true ? config.mockData.account_id : id
			}/customizations/${config.dev_env === true ? config.mockData.customization_id : customization_id}`,
			method: 'PUT',
			data,
		})
	},
	//END CUSTOMIZATIONS
}
