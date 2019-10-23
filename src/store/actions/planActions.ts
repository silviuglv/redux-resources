import { Error, GetPlansRequest, PaginatedApiResponse, Plan } from '../../types'

const types = {
	GET_PLANS: '[plans] GET_PLANS',
	SET_PLANS_INITIAL_STATE: '[plans] SET_PLANS_INITIAL_STATE',
	SET_PLANS_LOADING: '[plans] SET_PLANS_LOADING',
	SET_PLANS_FULFILLED: '[plans] SET_PLANS_FULFILLED',
	SET_PLANS_REJECTED: '[plans] SET_PLANS_REJECTED',
}

export const planActions = {
	...types,
	getPlans: (payload: GetPlansRequest = {}) => ({
		type: types.GET_PLANS,
		payload,
	}),
	setPlansInitialState: () => ({
		type: types.SET_PLANS_INITIAL_STATE,
		payload: null,
	}),
	setPlansLoading: () => ({
		type: types.SET_PLANS_LOADING,
		payload: null,
	}),
	setPlansFulfilled: (payload: PaginatedApiResponse<Plan>) => ({
		type: types.SET_PLANS_FULFILLED,
		payload,
	}),
	setPlansRejected: (payload: Error) => ({
		type: types.SET_PLANS_REJECTED,
		payload,
	}),
}
