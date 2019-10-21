import { BaseGetRequest } from './types'

export interface CreateCardRequest {
	token: string
	nickname?: string
}

export interface GetCardsRequest extends BaseGetRequest {
	ids?: string
	account_ids?: string
	order_by: 'id' | 'account_id' | 'is_default'
}

export interface UpdateCardRequest {
	name: string
	exp_month: string
	exp_year: number
	address_zip: string
	nickname?: string
}
