import { AccountRoles, FeedbackTypes, ProviderTypes, SignatureTypes } from './types'

export interface Account {
	id: string
	name: string
	owner: User
	image_url: string | null
	role: AccountRoles | undefined
}

export interface AccountInvite {
	id: string
	name: string
	email: string
	role: AccountRoles
	custom_message: string | null
	account: Account
	created_by: User
	joined_at: string | null
	joined_user: User | null
	created_at: string
}

export interface Address {
	id: string
	street1: string
	street2: string | null
	city: string | null
	postal_code: string | null
	state_province: string | null
	country: Country | null
	is_primary: boolean
}

export interface ConfirmationToken {
	id: string
	token: string
	expires_at: string | null
	user: User
}

export interface ConnectedService {
	id: string
	provider: ProviderTypes
	email: string
	scopes: string | null
	url: string | null
	created_at: string
}

export interface Country {
	id: string
	name: string
	code: string
}

export interface Feedback {
	id: string
	type: FeedbackTypes
	user_id: string
	content: string
	created_at: string
}

export interface Notification {
	id: string
	type: string
	notifiable_type: string
	notifiable_id: number
	data
	read_at: string | null
	created_at: string
	updated_at: string
}

export interface NotificationPreference {
	id: string
	account_invite_received_email: boolean
	account_invite_accepted_email: boolean
	account_invite_rejected_email: boolean
	user_id: string
}

export interface Role {
	id: string
	name: string
}

export interface Signature {
	id: string
	type: SignatureTypes
	user_id: string
	image: string | null
	created_at: string
}

export interface User {
	id: string
	first_name: string
	last_name: string
	email: string
	image_url: string | null
	role: AccountRoles | null
	joined_at: string | null
}

export interface UserMeta {
	email_confirmed: boolean
	created_at: string
	updated_at: string
}
