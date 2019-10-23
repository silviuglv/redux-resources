import axios from 'axios'
import config from '../config'

export const connectedServiceApi = {
	getConnectedServices: (params = {}) => {
		return axios({
			url: `${config.apiBase}/connected_services`,
			method: 'GET',
			params,
		})
	},
	createConnectedService: (data) => {
		return axios({
			url: `${config.apiBase}/connected_services`,
			method: 'POST',
			data,
		})
	},
	updateConnectedService: (id: string, data: any) => {
		return axios({
			url: `${config.apiBase}/connected_services/${id}`,
			method: 'PUT',
			data,
		})
	},
	getConnectedAccount: (provider: string, params: any) => {
		return axios({
			url: `${config.apiBase}/connected_services/${provider}/social_user`,
			method: 'GET',
			params,
		})
	},
	deleteConnectedService: (id: any, scopes?) => {
		return axios({
			url:
				scopes === undefined
					? `${config.apiBase}/connected_services/${id}`
					: `${config.apiBase}/connected_services/${id}/${scopes}`,
			method: 'DELETE',
		})
	},
}
