import axios from 'axios'
import config from '../config'
import { GetContactsRequest } from '../types'

export const contactApi = {
	searchContact: (params: GetContactsRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/contacts`,
			method: 'GET',
			params,
		})
	},
}
