export type ENVIRONMENT = 'development' | 'production' | string

export interface Dictionary<T> {
	[index: string]: T
}

export interface UI {
	loaded: boolean
	loading: boolean
}

export interface Meta {
	total: number
	per_page: number
	current_page: number
	last_page: number
	from: number
	to: number
}

export interface Error {
	status: number
	message: string
	fields: null | []
}

export interface Observer {
	ui: UI
	error: Error
}

export interface Item<T> {
	ui: UI
	data: T
	error: Error
}

export interface Pagination<T> {
	ui: UI
	meta: Meta
	data: Array<T>
	error: Error
}
