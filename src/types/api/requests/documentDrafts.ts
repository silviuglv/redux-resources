import { BaseGetRequest } from './types'

export interface CreateDocumentDraftRequest {
	account_id: string
	name?: string
	body
}

export interface GetDocumentDraftsRequest extends BaseGetRequest {
	ids?: string
	account_ids?: string
	order_by?: 'id' | 'name'
}

export interface UpdateDocumentDraftRequest {
	name?: string
	body
}
