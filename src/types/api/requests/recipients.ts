//import { BaseGetRequest } from './types'

export interface GetRecipientTypesRequest {
	name?: string
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
