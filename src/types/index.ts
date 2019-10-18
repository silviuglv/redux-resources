export * from './api'
export * from './app'

export type ENVIRONMENT = 'development' | 'production' | string

export interface Dictionary<T> {
	[index: string]: T
}
