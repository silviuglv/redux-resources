export interface CreateUserRequest {
	first_name: string
	last_name: string
	email: string
	password: string
	account: {
		name: string
	}
}

export interface CreateUserFromAccountInviteRequest {
	first_name: string
	last_name: string
	email: string
	password: string
	password_confirmation: string
	account_invite_id: string
	account_invite_token: string
}

export interface GetPictureRequest {
	width?: number
	height?: number
	redirect?: boolean
}

export interface UpdateNotificationPreferencesRequest {
	account_invite_received_email: boolean
	account_invite_accepted_email: boolean
	account_invite_rejected_email: boolean
}

export interface UpdatePasswordRequest {
	password: string
	new_password: string
	new_password_confirmation: string
}

export interface UpdateUserRequest {
	first_name: string
	last_name: string
	email: string
}
