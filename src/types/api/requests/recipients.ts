import { RecipientTypes } from '../models'

export interface CreateRecipientRequest {
	first_name: string
	last_name: string
	email: string
	type: RecipientTypes
}

export interface UpdateRecipientRequest {
	first_name: string
	last_name: string
	email: string
	type: RecipientTypes
}

export interface MessageSenderRequest {
	message: string
}
