import axios from 'axios'
import config from '../config'
import { GetFoldersRequest, CreateFolderRequest, UpdateFolderRequest } from '../types'

export const folderApi = {
	getFolders: (params: GetFoldersRequest = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/folders`,
			method: 'GET',
			params,
		})
	},
	showFolder: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/folders/${
				config.dev_env === true ? config.mockData.folder_id : id
			}`,
			method: 'GET',
		})
	},
	createFolder: (data: CreateFolderRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/folders`,
			method: 'POST',
			data,
		})
	},
	updateFolder: (id: string, data: UpdateFolderRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/folders/${
				config.dev_env === true ? config.mockData.folder_id : id
			}`,
			method: 'PUT',
			data,
		})
	},
}
