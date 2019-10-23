import axios from 'axios'
import config from '../config'
import { GetFoldersRequest, CreateFolderRequest, UpdateFolderRequest } from '../types'

export const folderApi = {
	getFolders: (params: GetFoldersRequest = {}) => {
		return axios({
			url: `${config.apiBase}/folders`,
			method: 'GET',
			params,
		})
	},
	showFolder: (id: string) => {
		return axios({
			url: `${config.apiBase}/folders/${id}`,
			method: 'GET',
		})
	},
	createFolder: (data: CreateFolderRequest) => {
		return axios({
			url: `${config.apiBase}/folders`,
			method: 'POST',
			data,
		})
	},
	updateFolder: (id: string, data: UpdateFolderRequest) => {
		return axios({
			url: `${config.apiBase}/folders/${id}`,
			method: 'PUT',
			data,
		})
	},
}
