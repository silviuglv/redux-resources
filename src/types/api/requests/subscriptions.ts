import { BaseGetRequest } from './types'

export interface CreateSubscriptionRequest {
	account_id: string
	plan_id: string
	coupon?: string
}

export interface GetSubscriptionsRequest extends BaseGetRequest {
	ids?: string
	account_ids?: string
}

export interface UpdateSubscriptionRequest {
	plan_id: string
	coupon?: string
}
