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
			.then((res) => res.data)
			.then((data) =>
				data.map((c) => ({
					firstName: c.first_name,
					lastName: c.last_name,
					email: c.email_addresses[0] && c.email_addresses[0].value,
					imageUrl: c.image_url,
				}))
			)
	},
}
