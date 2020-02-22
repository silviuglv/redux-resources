import axios from 'axios'
import config from '../config'
import { CreateFeedbackRequest } from '../types'

export const feedbackApi = {
	sendFeedback: (data: CreateFeedbackRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/feedback`,
			method: 'POST',
			data,
		})
	},
}
