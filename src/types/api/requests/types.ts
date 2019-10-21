export type Direction = 'asc' | 'desc'

export interface BaseGetRequest {
	order_by?: string
	direction?: Direction
	page?: number
	per_page?: number
}
