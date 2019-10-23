import { BaseGetRequest } from './types'

export interface CreateFolderRequest {
	account_id: string
	name: string
	parent_folder_id?: string
}

export interface GetFoldersRequest extends BaseGetRequest {
	ids?: string
	parent_folder_ids?: string | null
	account_ids?: string
	order_by?: 'id' | 'name'
}

export interface UpdateFolderRequest {
	name: string
	parent_folder_id?: string
}
