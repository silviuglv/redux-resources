import axios from 'axios'
import config from '../config'
import { CreateFeedbackRequest } from '../types'

export const feedbackApi = {
	sendFeedback: (data: CreateFeedbackRequest) => {
		return axios({
			url: `${config.apiBase}/feedback`,
			method: 'POST',
			data,
		})
	},
}
