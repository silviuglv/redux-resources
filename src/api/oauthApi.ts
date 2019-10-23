import axios from 'axios'
import config from '../config'
import { ProviderTypes } from '../types'

export const oauthApi = {
	createAccessToken: (user: any) => {
		return axios({
			url: `${config.apiBase}/oauth/token`,
			method: 'POST',
			data: {
				grant_type: 'password',
				username: user.email,
				password: user.password,
			},
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
	createClient: (data: any) => {
		return axios({
			url: `${config.apiBase}/oauth/clients`,
			method: 'POST',
			data,
		})
	},
	authorizeClient: (params: any) => {
		return axios({
			url: `${config.apiBase}/oauth/authorize`,
			method: 'GET',
			params,
		})
	},
}
