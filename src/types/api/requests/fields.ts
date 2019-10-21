import { FieldTypes } from '../models'
import { BaseGetRequest } from './types'

export interface CreateFieldRequest {
	page_id: string
	recipient_id: string
	type: FieldTypes
	is_required: boolean
	top: number
	left: number
	width: number
	height: number
}

export interface GetFieldsRequest extends BaseGetRequest {
	page_ids?: string
	recipient_ids?: string
	order_by?: 'id'
}

export interface GetFieldTypesRequest {
	package_type_id?: string
}

export interface UpdateFieldRequest {
	recipient_id: string
	type: FieldTypes
	is_required: boolean
	top: number
	left: number
	width: number
	height: number
}
