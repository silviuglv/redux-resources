import { BaseGetRequest, AccountRoles, Account } from '../../../types'

export interface CreateAccountRequest {
	name: string
}

export interface GetAccountsRequest extends BaseGetRequest {
	ids?: string
	order_by?: 'name' | 'id'
}

export interface GetAccountUsersRequest extends BaseGetRequest {
	user_ids?: string
	order_by?: 'name' | 'id'
}

export interface UpdateAccountRequest {
	account: Account
}

export interface UpdateAccountUserRequest {
	role: AccountRoles
}

export interface GetCustomizationTypesRequest extends BaseGetRequest {
	order_by?: 'name' | 'id'
}

export interface GetAccountCustomizationsRequest extends BaseGetRequest {
	order_by?: 'name' | 'id'
}

export interface CreateCustomizationRequest {
	type_id: string
	meta
	file?
}

export interface UpdateCustomizationRequest {
	meta
	file?
}
