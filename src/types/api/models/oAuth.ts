export interface PersonalAccessToken {
	id: string
	user_id: number
	client_id: number
	name: string
	scopes: []
	revoked: boolean
	created_at: string
	updated_at: string
	expires_at: string
}

export interface AccessToken {
	token_type: string
	expires_in: number
	access_token: string
	refresh_token: string
}
