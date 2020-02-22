import axios from 'axios'
import config from '../config'
import { GetConnectedServicesRequest } from '../types/api/requests'

export const connectedServiceApi = {
	getConnectedServices: (params: GetConnectedServicesRequest = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/connected-services`,
			method: 'GET',
			params,
		})
	},
	createConnectedService: (data) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/connected-services`,
			method: 'POST',
			data,
		})
	},
	updateConnectedService: (id: string, data: any) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/connected-services/${id}`,
			method: 'PUT',
			data,
		})
	},
	getConnectedAccount: (provider: string, params: any) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/connected-services/${provider}/social-user`,
			method: 'GET',
			params,
		})
	},
	deleteConnectedService: (id: any, scopes?) => {
		return axios({
			url:
				scopes === undefined
					? `${config.dev_env === true ? config.apiMock : config.apiBase}/connected-services/${id}`
					: `${config.dev_env === true ? config.apiMock : config.apiBase}/connected-services/${id}/${scopes}`,
			method: 'DELETE',
		})
	},
}
