export interface CreateDocumentRequest {
	account_id: string
	file
}

export interface CreateDocumentBuildRequest {
	name?: string
	content: string
}

export interface UpdateDocumentRequest {
	name: string
}

export interface CreateDocumentRenderFieldsRequest {
	name?: string
	content: string
}
