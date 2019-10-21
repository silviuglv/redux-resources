import { BaseGetRequest, AccountRoles } from '../../../types'

export interface CreateAccountInviteRequest {
	account_id: string
	name: string
	email: string
	role: AccountRoles
	custom_message?: string
}

export interface GetAccountInvitesRequest extends BaseGetRequest {
	account_invite_ids?: string
	account_ids?: string
	emails?: string
	status?: string
	order_by?: 'id' | 'email' | 'account_id'
}
