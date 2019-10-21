export type Direction = 'asc' | 'desc'

export interface BaseGetRequest {
	order_by: string | null
	direction: Direction | undefined
	page: number | null
	per_page: number | null
}
