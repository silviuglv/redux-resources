import { ItemResponse, Observer, PaginatedResponse, PaginatedApiResponse, Error } from '../types'

const getPaginationInitialState = (): PaginatedResponse<any> => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		meta: {
			total: 0,
			per_page: 0,
			current_page: 0,
			last_page: 0,
			from: 0,
			to: 0,
		},
		data: [],
		error: null,
	}
}

const getPaginationLoading = (): PaginatedResponse<any> => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		meta: {
			total: 0,
			per_page: 0,
			current_page: 0,
			last_page: 0,
			from: 0,
			to: 0,
		},
		data: [],
		error: null,
	}
}

const getPaginationFulfilled = (data: PaginatedApiResponse<any>): PaginatedResponse<any> => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		meta: {
			total: data.total,
			per_page: data.per_page,
			current_page: data.current_page,
			last_page: data.last_page,
			from: data.from,
			to: data.to,
		},
		data: data.data,
		error: null,
	}
}

const getPaginationFromLocalStorage = (name: string): PaginatedResponse<any> => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getPaginationInitialState()
	} else {
		const parsed = JSON.parse(value)
		return getPaginationFulfilled(parsed)
	}
}

const addItemToPagination = (
	list: PaginatedResponse<any>,
	data: PaginatedApiResponse<any>,
	prepend = true
): PaginatedResponse<any> => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		meta: {
			total: list.meta.total + 1,
			per_page: list.meta.per_page,
			current_page: list.meta.current_page,
			last_page: list.meta.last_page,
			from: list.meta.from,
			to: list.meta.to,
		},
		data: prepend === true ? [data].concat(list.data) : list.data.concat([data]),
		error: null,
	}
}

const removeItemFromPagination = (list: PaginatedResponse<any>, resourceId: string): PaginatedResponse<any> => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		meta: {
			total: list.meta.total - 1,
			per_page: list.meta.per_page,
			current_page: list.meta.current_page,
			last_page: list.meta.last_page,
			from: list.meta.from,
			to: list.meta.to,
		},
		data: list.data.filter((item) => item.id !== resourceId),
		error: null,
	}
}

const updateItemInPagination = (list: PaginatedResponse<any>, item: any): PaginatedResponse<any> => {
	const index = list.data.findIndex((listItem) => listItem.id === item.id)
	list.data[index] = item
	return list
}

const getPaginationRejected = (error: Error): PaginatedResponse<any> => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		meta: {
			total: 0,
			per_page: 0,
			current_page: 0,
			last_page: 0,
			from: 0,
			to: 0,
		},
		data: [],
		error,
	}
}

const getItemInitialState = (data = null): ItemResponse<any> => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		data: data,
		error: null,
	}
}

const getItemLoading = (data = null): ItemResponse<any> => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		data: data,
		error: null,
	}
}

const getItemFulfilled = (data = {}): ItemResponse<any> => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		data: data,
		error: null,
	}
}

const getItemRejected = (error: Error, data = null): ItemResponse<any> => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		data: data,
		error,
	}
}

const getStringFromLocalStorage = (name: string): ItemResponse<any> => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getItemInitialState()
	} else {
		return getItemFulfilled(value)
	}
}

const getItemFromLocalStorage = (name: string): ItemResponse<any> => {
	const value = window.localStorage.getItem(name)
	if (value === null) {
		return getItemInitialState()
	} else {
		const parsed = JSON.parse(value)
		return getItemFulfilled(parsed)
	}
}

const getObserverInitialState = (): Observer => {
	return {
		ui: {
			loaded: false,
			loading: false,
		},
		error: null,
	}
}

const getObserverLoading = (): Observer => {
	return {
		ui: {
			loaded: false,
			loading: true,
		},
		error: null,
	}
}

const getObserverFulfilled = (): Observer => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		error: null,
	}
}

const getObserverRejected = (error: Error): Observer => {
	return {
		ui: {
			loaded: true,
			loading: false,
		},
		error,
	}
}

export default {
	getPaginationFromLocalStorage,
	getPaginationInitialState,
	getPaginationLoading,
	getPaginationFulfilled,
	addItemToPagination,
	removeItemFromPagination,
	updateItemInPagination,
	getPaginationRejected,

	getStringFromLocalStorage,
	getItemFromLocalStorage,
	getItemInitialState,
	getItemLoading,
	getItemFulfilled,
	getItemRejected,

	getObserverInitialState,
	getObserverLoading,
	getObserverFulfilled,
	getObserverRejected,
}
