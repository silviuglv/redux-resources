import axios from 'axios'
import config from '../config'
import { ProviderTypes } from '../types'

export const authApi = {
	createAccessToken: (user: any) => {
		return axios({
			url: `${config.apiBase}/auth/login`,
			method: 'POST',
			data: {
				email: user.email,
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
	createSocialAccessToken: (provider: ProviderTypes, access_token: string, token_secret: string) => {
		return axios({
			url: `${config.apiBase}/oauth/token`,
			method: 'POST',
			data: {
				grant_type: 'social',
				provider,
				access_token,
				token_secret,
			},
		})
	},
}
