import { ConnectedService, PaginatedApiResponse } from '../../types'

const types = {
	GET_CONNECTED_SERVICES: '[connectedServices] GET_CONNECTED_SERVICES',
	SET_CONNECTED_SERVICES_INITIAL_STATE: '[connectedServices] SET_CONNECTED_SERVICES_INITIAL_STATE',
	SET_CONNECTED_SERVICES_LOADING: '[connectedServices] SET_CONNECTED_SERVICES_LOADING',
	SET_CONNECTED_SERVICES_FULFILLED: '[connectedServices] SET_CONNECTED_SERVICES_FULFILLED',
	SET_CONNECTED_SERVICES_REJECTED: '[connectedServices] SET_CONNECTED_SERVICES_REJECTED',

	CREATE_CONNECTED_SERVICE: '[connectedServices] CREATE_CONNECTED_SERVICE',
	CREATE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] CREATE_CONNECTED_SERVICE_INITIAL_STATE',
	CREATE_CONNECTED_SERVICE_LOADING: '[connectedServices] CREATE_CONNECTED_SERVICE_LOADING',
	CREATE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] CREATE_CONNECTED_SERVICE_FULFILLED',
	CREATE_CONNECTED_SERVICE_REJECTED: '[connectedServices] CREATE_CONNECTED_SERVICE_REJECTED',

	UPDATE_CONNECTED_SERVICE: '[connectedServices] UPDATE_CONNECTED_SERVICE',
	UPDATE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] UPDATE_CONNECTED_SERVICE_INITIAL_STATE',
	UPDATE_CONNECTED_SERVICE_LOADING: '[connectedServices] UPDATE_CONNECTED_SERVICE_LOADING',
	UPDATE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] UPDATE_CONNECTED_SERVICE_FULFILLED',
	UPDATE_CONNECTED_SERVICE_REJECTED: '[connectedServices] UPDATE_CONNECTED_SERVICE_REJECTED',

	DELETE_CONNECTED_SERVICE: '[connectedServices] DELETE_CONNECTED_SERVICE',
	DELETE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] DELETE_CONNECTED_SERVICE_INITIAL_STATE',
	DELETE_CONNECTED_SERVICE_LOADING: '[connectedServices] DELETE_CONNECTED_SERVICE_LOADING',
	DELETE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] DELETE_CONNECTED_SERVICE_FULFILLED',
	DELETE_CONNECTED_SERVICE_REJECTED: '[connectedServices] DELETE_CONNECTED_SERVICE_REJECTED',

	SET_CONNECTED_SERVICES: '[connectedServices] SET_CONNECTED_SERVICES',
	SET_AVAILABLE_SERVICES: '[connectedServices] SET_AVAILABLE_SERVICES',
}

export const connectedServiceActions = {
	...types,
	getConnectedServices: (payload = {}) => ({
		type: types.GET_CONNECTED_SERVICES,
		payload,
	}),
	setConnectedServicesInitialState: () => ({
		type: types.SET_CONNECTED_SERVICES_INITIAL_STATE,
		payload: null,
	}),
	setConnectedServicesLoading: () => ({
		type: types.SET_CONNECTED_SERVICES_LOADING,
		payload: null,
	}),
	setConnectedServicesFulfilled: (payload: PaginatedApiResponse<ConnectedService>) => ({
		type: types.SET_CONNECTED_SERVICES_FULFILLED,
		payload,
	}),
	setConnectedServicesRejected: (payload: Error) => ({
		type: types.SET_CONNECTED_SERVICES_REJECTED,
		payload,
	}),

	createConnectedService: (payload, successCb?, errorCb?) => ({
		type: types.CREATE_CONNECTED_SERVICE,
		payload,
		successCb,
		errorCb,
	}),
	createConnectedServiceInitialState: () => ({
		type: types.CREATE_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	createConnectedServiceLoading: () => ({
		type: types.CREATE_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	createConnectedServiceFulfilled: (payload: ConnectedService) => ({
		type: types.CREATE_CONNECTED_SERVICE_FULFILLED,
		payload,
	}),
	createConnectedServiceRejected: (payload: Error) => ({
		type: types.CREATE_CONNECTED_SERVICE_REJECTED,
		payload,
	}),

	updateConnectedService: (id: string, payload, successCb?, errorCb?) => ({
		type: types.UPDATE_CONNECTED_SERVICE,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updateConnectedServiceInitialState: () => ({
		type: types.UPDATE_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	updateConnectedServiceLoading: () => ({
		type: types.UPDATE_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	updateConnectedServiceFulfilled: (payload: ConnectedService) => ({
		type: types.UPDATE_CONNECTED_SERVICE_FULFILLED,
		payload,
	}),
	updateConnectedServiceRejected: (payload: Error) => ({
		type: types.UPDATE_CONNECTED_SERVICE_REJECTED,
		payload,
	}),

	deleteConnectedService: (id: string, scopes?: string, successCb?, errorCb?) => ({
		type: types.DELETE_CONNECTED_SERVICE,
		payload: null,
		id,
		scopes,
		successCb,
		errorCb,
	}),
	deleteConnectedServiceInitialState: () => ({
		type: types.DELETE_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	deleteConnectedServiceLoading: () => ({
		type: types.DELETE_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	deleteConnectedServiceFulfilled: () => ({
		type: types.DELETE_CONNECTED_SERVICE_FULFILLED,
		payload: null,
	}),
	deleteConnectedServiceRejected: (payload: Error) => ({
		type: types.DELETE_CONNECTED_SERVICE_REJECTED,
		payload,
	}),
	setConnectedServices: (payload: Array<ConnectedService>) => ({
		type: types.SET_CONNECTED_SERVICES,
		payload,
	}),
	setAvailableServices: (payload: Array<ConnectedService>) => ({
		type: types.SET_AVAILABLE_SERVICES,
		payload,
	}),
}
