import axios from 'axios'
import config from '../config'
import { GetPlansRequest } from '../types'

export const planApi = {
	getPlans: (params: GetPlansRequest = {}) => {
		return axios({
			url: `${config.apiBase}/plans`,
			method: 'GET',
			params,
		})
	},
}
