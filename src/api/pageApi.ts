import axios from 'axios'
import config from '../config'

export const pageApi = {
	getPages: (package_id: string, document_id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/packages/${
				config.dev_env === true ? config.mockData.package_id : package_id
			}/documents/${config.dev_env === true ? config.mockData.document_id : document_id}/pages?per_page=1000`,
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
