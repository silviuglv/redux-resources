import { BaseGetRequest } from './types'

export interface AcceptAccountInviteRequest {
	id: string
}

export interface CreateAccountInviteRequest {
	account_id: string
	name: string
	email: string
	role: string
	custom_message: string | null
}

export interface DeleteAccountInviteRequest {
	id: string
}

export interface GetAccountInvites extends BaseGetRequest {
	account_invite_ids: string | null
	account_ids: string | null
	emails: string | null
	status: string | null
}

export interface ShowAccountInviteRequest {
	id: string
}

export interface CreateAccountRequest {
	name: string
}

export interface DeleteAccountUserRequest {
	id: string
}

export interface GetAccountPictureRequest {
	id: string
	width: number | null
	height: number | null
	redirect: boolean | null
}

export interface GetAccountsRequest extends BaseGetRequest {
	ids: string | null
}

export interface GetAccountUsersRequest extends BaseGetRequest {
	id: string
	user_ids: string | null
}
