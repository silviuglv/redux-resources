import axios from 'axios'
import config from '../config'
import { GetContactsRequest } from '../types'

export const contactApi = {
	searchContact: (params: GetContactsRequest) => {
		return axios({
			url: `${config.apiBase}/contacts`,
			method: 'GET',
			params,
		})
	},
}
