import axios from 'axios'
import config from '../config'
import { GetSubscriptionsRequest, CreateSubscriptionRequest, UpdateSubscriptionRequest } from '../types'

export const subscriptionApi = {
	getSubscriptions: (params: GetSubscriptionsRequest = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/subscriptions`,
			method: 'GET',
			params,
		})
	},
	createSubscription: (data: CreateSubscriptionRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/subscriptions`,
			method: 'POST',
			data,
		})
	},
	updateSubscription: (id: string, data: UpdateSubscriptionRequest) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/subscriptions/${
				config.dev_env === true ? config.mockData.subscription_id : id
			}`,
			method: 'PUT',
			data,
		})
	},
	deleteSubscription: (id: string) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/subscriptions/${
				config.dev_env === true ? config.mockData.subscription_id : id
			}`,
			method: 'DELETE',
		})
	},
	getUpcomingInvoices: (id: string, params: any = {}) => {
		return axios({
			url: `${config.dev_env === true ? config.apiMock : config.apiBase}/subscriptions/${
				config.dev_env === true ? config.mockData.subscription_id : id
			}/upcoming_invoices`,
			method: 'GET',
			params,
		})
	},
}
