import { Account, Error, GetSubscriptionsRequest, PaginatedApiResponse, Plan, Subscription } from '../../types'

const types = {
	GET_SUBSCRIPTIONS: '[subscriptions] GET_SUBSCRIPTIONS',
	SET_SUBSCRIPTIONS_LOADING: '[subscriptions] SET_SUBSCRIPTIONS_LOADING',
	SET_SUBSCRIPTIONS_FULFILLED: '[subscriptions] SET_SUBSCRIPTIONS_FULFILLED',
	SET_SUBSCRIPTIONS_REJECTED: '[subscriptions] SET_SUBSCRIPTIONS_REJECTED',

	CREATE_SUBSCRIPTION: '[subscriptions] CREATE_SUBSCRIPTION',
	SET_CREATE_SUBSCRIPTION_LOADING: '[subscriptions] SET_CREATE_SUBSCRIPTION_LOADING',
	SET_CREATE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_CREATE_SUBSCRIPTION_FULFILLED',
	SET_CREATE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_CREATE_SUBSCRIPTION_REJECTED',

	UPDATE_SUBSCRIPTION: '[subscriptions] UPDATE_SUBSCRIPTION',
	SET_UPDATE_SUBSCRIPTION_LOADING: '[subscriptions] SET_UPDATE_SUBSCRIPTION_LOADING',
	SET_UPDATE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_UPDATE_SUBSCRIPTION_FULFILLED',
	SET_UPDATE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_UPDATE_SUBSCRIPTION_REJECTED',

	DELETE_SUBSCRIPTION: '[subscriptions] DELETE_SUBSCRIPTION',
	SET_DELETE_SUBSCRIPTION_LOADING: '[subscriptions] SET_DELETE_SUBSCRIPTION_LOADING',
	SET_DELETE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_DELETE_SUBSCRIPTION_FULFILLED',
	SET_DELETE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_DELETE_SUBSCRIPTION_REJECTED',
}

export const subscriptionActions = {
	...types,
	getSubscriptions: (payload: GetSubscriptionsRequest = {}) => ({
		type: types.GET_SUBSCRIPTIONS,
		payload,
	}),
	setSubscriptionsLoading: () => ({
		type: types.SET_SUBSCRIPTIONS_LOADING,
		payload: null,
	}),
	setSubscriptionsFulfilled: (payload: PaginatedApiResponse<Subscription>) => ({
		type: types.SET_SUBSCRIPTIONS_FULFILLED,
		payload,
	}),
	setSubscriptionsRejected: (payload: Error) => ({
		type: types.SET_SUBSCRIPTIONS_REJECTED,
		payload,
	}),

	createSubscription: (account: Account, plan: Plan, coupon: string = null, successCb, errorCb) => ({
		type: types.CREATE_SUBSCRIPTION,
		payload: null,
		account,
		plan,
		coupon,
		successCb,
		errorCb,
	}),
	setCreateSubscriptionLoading: () => ({
		type: types.SET_CREATE_SUBSCRIPTION_LOADING,
		payload: null,
	}),
	setCreateSubscriptionFulfilled: (payload: Subscription) => ({
		type: types.SET_CREATE_SUBSCRIPTION_FULFILLED,
		payload,
	}),
	setCreateSubscriptionRejected: (payload: Error) => ({
		type: types.SET_CREATE_SUBSCRIPTION_REJECTED,
		payload,
	}),

	updateSubscription: (subscription: Subscription, plan: Plan, coupon: string = null, successCb, errorCb) => ({
		type: types.UPDATE_SUBSCRIPTION,
		payload: null,
		subscription,
		plan,
		coupon,
		successCb,
		errorCb,
	}),
	setUpdateSubscriptionLoading: () => ({
		type: types.SET_UPDATE_SUBSCRIPTION_LOADING,
		payload: null,
	}),
	setUpdateSubscriptionFulfilled: (payload: Subscription) => ({
		type: types.SET_UPDATE_SUBSCRIPTION_FULFILLED,
		payload,
	}),
	setUpdateSubscriptionRejected: (payload: Error) => ({
		type: types.SET_UPDATE_SUBSCRIPTION_REJECTED,
		payload,
	}),

	deleteSubscription: (subscription: Subscription, successCb, errorCb) => ({
		type: types.DELETE_SUBSCRIPTION,
		payload: null,
		subscription,
		successCb,
		errorCb,
	}),
	setDeleteSubscriptionLoading: () => ({
		type: types.SET_DELETE_SUBSCRIPTION_LOADING,
		payload: null,
	}),
	setDeleteSubscriptionFulfilled: (payload) => ({
		type: types.SET_DELETE_SUBSCRIPTION_FULFILLED,
		payload,
	}),
	setDeleteSubscriptionRejected: (payload: Error) => ({
		type: types.SET_DELETE_SUBSCRIPTION_REJECTED,
		payload,
	}),
}
