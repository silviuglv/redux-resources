import axios from 'axios'
import config from '../config'

export const planApi = {
	getPlans: (params = {}) => {
		return axios({
			url: `${config.apiBase}/plans`,
			method: 'GET',
			params,
		})
	},
}
