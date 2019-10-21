import { BaseGetRequest, AccountRoles } from '../../../types'

export interface CreateAccountRequest {
	name: string
}

export interface GetAccountPictureRequest {
	width?: number
	height?: number
	redirect?: boolean
}

export interface GetAccountsRequest extends BaseGetRequest {
	ids?: string
	order_by?: 'id' | 'name'
}

export interface GetAccountUsersRequest extends BaseGetRequest {
	user_ids?: string
	order_by?: 'id' | 'name'
}

export interface UpdateAccountRequest {
	name: string
}

export interface UpdateAccountUserRequest {
	role: AccountRoles
}
