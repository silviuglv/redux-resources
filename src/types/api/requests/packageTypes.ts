import { BaseGetRequest } from './types'

export interface GetPackageTypesRequest extends BaseGetRequest {
	order_by?: 'id' | 'name'
}
