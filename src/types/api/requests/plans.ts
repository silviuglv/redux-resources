import { BaseGetRequest } from './types'

export interface GetPlansRequest extends BaseGetRequest {
	ids?: string
	order_by?: 'id' | 'interval' | 'amount'
}
