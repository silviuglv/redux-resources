import axios from 'axios'
import config from '../config'
import { GetCardsRequest, CreateCardRequest, UpdateCardRequest } from '../types'

export const cardApi = {
	getCards: (params: GetCardsRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/cards`,
			method: 'GET',
			params,
		})
	},
	deleteCard: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/cards/${
				config.dev_env === true ? config.mockData.card_id : id
			}`,
			method: 'DELETE',
		})
	},
	createCard: (data: CreateCardRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/cards`,
			method: 'POST',
			data,
		})
	},
	updateCard: (id: string, data: UpdateCardRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/cards/${
				config.dev_env === true ? config.mockData.card_id : id
			}`,
			method: 'PUT',
			data,
		})
	},
	setDefaultCard: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/cards/${
				config.dev_env === true ? config.mockData.card_id : id
			}/default`,
			method: 'PUT',
		})
	},
}
