import axios from 'axios'
import config from '../config'

export const pageApi = {
	getPages: (packageId: string, documentId: string) => {
		return axios({
			url: `${
				config.dev_env === true ? config.apiMock : config.apiBase
			}/packages/${packageId}/documents/${documentId}/pages?per_page=1000`,
			method: 'GET',
		})
	},
	getPageImage: (url: string) => {
		return axios({
			url,
			method: 'GET',
			headers: { Accept: 'image/png' },
		})
	},
}
