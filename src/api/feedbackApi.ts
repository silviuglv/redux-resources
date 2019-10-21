import axios from 'axios'
import config from '../config'

export const feedbackApi = {
	sendFeedback: (data) => {
		return axios({
			url: `${config.apiBase}/feedback`,
			method: 'POST',
			data,
		})
	},
}
