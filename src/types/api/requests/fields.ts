import { BaseGetRequest } from './types'

export interface CreateFieldRequest {
	page_id: string
	recipient_id: string
	type: string
	is_required: boolean
	top: number
	left: number
	width: number
	height: number
}

export interface GetFieldsRequest extends BaseGetRequest {
	package_id?: string
	recipient_ids?: string
}

export interface UpdateFieldRequest {
	recipient_id: string
	type: string
	is_required: boolean
	top: number
	left: number
	width: number
	height: number
	value: string
}
export interface GetFieldTypesRequest {
	package_type_id?: string
	order_by?: 'id' | 'name'
}
export interface GetPresetsRequest extends BaseGetRequest {
	account_id?: string
	order_by?: 'id' | 'name'
}

export interface CreatePresetRequest {
	account_id: string
	field_type_id: string
	data
}
export interface UpdatePresetRequest {
	account_id: string
	data
}
