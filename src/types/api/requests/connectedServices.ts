import { BaseGetRequest } from './types'

export interface GetConnectedServicesRequest extends BaseGetRequest {
	providers_like?: string
}
