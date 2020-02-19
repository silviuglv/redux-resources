import axios from 'axios'
import config from '../config'

export const authApi = {
	createAccessToken: (user: any) => {
		return axios({
			url: `${config.apiBase}/auth/login`,
			method: 'POST',
			data: {
				grant_type: 'password',
				username: user.email,
				password: user.password,
			},
		})
	},
	refreshAccessToken: () => {
		return axios({
			url: `${config.apiBase}/auth/refresh`,
			method: 'POST',
		})
	},
	invalidateAccessToken: () => {
		return axios({
			url: `${config.apiBase}/auth/logout`,
			method: 'POST',
		})
	},
}
