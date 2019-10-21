import { BaseGetRequest } from './types'

export interface GetPackageStatusesRequest extends BaseGetRequest {
	ids?: string
	order_by?: 'id' | 'name'
}
