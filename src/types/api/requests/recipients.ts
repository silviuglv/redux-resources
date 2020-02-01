export interface GetRecipientTypesRequest {
	order_by?: 'name'
}

export interface CreateRecipientRequest {
	first_name: string
	last_name: string
	email: string
	type: string
}

export interface UpdateRecipientRequest {
	first_name: string
	last_name: string
	email: string
	type: string
}

export interface MessageSenderRequest {
	message: string
}
