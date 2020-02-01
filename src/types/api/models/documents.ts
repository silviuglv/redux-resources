import { User } from './cms'

export interface Document {
	id: string
	name: string
	total_pages: number
	cover_page: Page | null
	account_id: string
	created_by: User
	created_at: string
}

export interface DocumentDraft {
	id: string
	name: string | null
	body: string | null
	account_id: string
	created_by: User
	created_at: string
}

export interface Field {
	id: string
	type: string
	label: string | null
	meta
	is_required: boolean
	is_read_only: boolean
	hover_text: string | null
	left: number
	top: number
	width: number
	height: number
	package_id: string
	page_id: string
	recipient_id: string
	value
	parent_field_id: string | null
}

export interface FieldType {
	name: string
	options
}

export interface Folder {
	id: string
	name: string
	total_items: number
	parent_folder: string | null
	account_id: string
	created_by_id: string
	created_at: string
}

export interface Package {
	id: string
	name: string | null
	image_url: string | null
	message_to_recipients: string | null
	account_id: string
	folder_id: string | null
	status: PackageStatus
	type: PackageType
	can_edit: boolean
	can_preview: boolean
	can_download: boolean
	can_publish: boolean
	cover_page: Page | null
	created_by: User
	created_at: string
	published_at: string | null
}

export interface PackageStatus {
	id: string
	name: string
}

export interface PackageType {
	id: string
	name: string
}

export interface Page {
	id: string
	image_url: string
	page: number
	document_id: string
	image: string | null
	thumbnail_image: string | null
}

export interface Recipient {
	id: string
	first_name: string
	last_name: string
	type: string
	email: string
	send_order: number | null
	token_expiration_date: string | null
	signing_completed_at: string | null
}

export interface RecipientType {
	id: string
	name: string
}
