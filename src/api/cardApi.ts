import axios from 'axios'
import config from '../config'
import { GetCardsRequest, CreateCardRequest, UpdateCardRequest } from '../types'

export const cardApi = {
	getCards: (params: GetCardsRequest) => {
		return axios({
			url: `${config.apiBase}/cards`,
			method: 'GET',
			params,
		})
	},
	deleteCard: (id: string) => {
		return axios({
			url: `${config.apiBase}/cards/${id}`,
			method: 'DELETE',
		})
	},
	createCard: (data: CreateCardRequest) => {
		return axios({
			url: `${config.apiBase}/cards`,
			method: 'POST',
			data,
		})
	},
	updateCard: (id: string, data: UpdateCardRequest) => {
		return axios({
			url: `${config.apiBase}/cards/${id}`,
			method: 'PUT',
			data,
		})
	},
	setDefaultCard: (id: string) => {
		return axios({
			url: `${config.apiBase}/cards/${id}/default`,
			method: 'PUT',
		})
	},
}
