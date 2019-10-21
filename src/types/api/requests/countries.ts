import { BaseGetRequest } from './types'

export interface GetCountriesRequest extends BaseGetRequest {
	ids?: string
	codes?: string
	order_by?: 'id' | 'name' | 'code'
}
