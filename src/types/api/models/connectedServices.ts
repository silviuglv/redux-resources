import { ProviderTypes } from './types'
import { Address } from './cms'

export interface ConnectedAccount {
	id: string
	provider: ProviderTypes
	token: string
	token_secret: string | null
	refresh_token: string | null
	scopes: string | null
	expires_in: string | null
	url: string | null
	email: string
	avatar: string | null
	first_name: string
	last_name: string
	email_confirmed: boolean
	raw
}

export interface DownloadedFile {
	normalized_file: NormalizedFile
	contents: string
}

export interface EmailAddress {
	value: string
	is_primary: boolean
}

export interface NormalizedContact {
	id: string
	provider: ProviderTypes
	first_name: string | null
	last_name: string | null
	email_addresses: Array<EmailAddress>
	phone_numbers: Array<PhoneNumber>
	image_url: string | null
	addresses: Array<Address>
}

export interface NormalizedFile {
	id: string | number
	provider: ProviderTypes
	name: string
	mime_type: string
	extension: string | null
	path: string | null
	parent_folder: string | null
	thumbnail_url: string | null
	size: number | number
	created_at: string
}

export interface PhoneNumber {
	value: string
	is_primary: boolean
}
