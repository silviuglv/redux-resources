import axios from 'axios'
import { Error } from '../types'

export default () => {
	//  Axios request interceptors
	axios.interceptors.request.use((request) => {
		//  Set the access_token in the request if it is set in local storage
		const accessToken = window.localStorage.getItem('accessToken')
		if (accessToken !== null) {
			request.headers['Authorization'] = `Bearer ${accessToken}`
		}

		//  If the Accept header isn't set default it to application/json
		if (request.headers['Accept'] === undefined) {
			request.headers['Accept'] = 'application/json'
		}
		//  If the Content-Type header isn't set default it to application/json
		if (request.headers['Content-Type'] === undefined) {
			request.headers['Content-Type'] = 'application/json'
		}

		return request
	})

	// Axios response interceptors
	axios.interceptors.response.use(
		(response) => response,
		(error) => {
			const message: Error = {
				status: 422,
				message: '',
				fields: [],
			}
			if (error.response) {
				const { data } = error.response
				message.status = error.response.status
				message.message = data.message
				message.fields = data.errors !== undefined && data.errors !== null ? data.errors : null
			} else {
				message.status = error.status
				message.message = error.message
				message.fields = error.fields
			}

			return Promise.reject(message)
		}
	)
}
