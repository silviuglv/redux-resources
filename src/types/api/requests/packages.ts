import { BaseGetRequest } from './types'

export interface CreatePackageDocumentRequest {
	file
}
export interface CreatePackageDocumentBuildRequest {
	name?: string
	content: string
}
export interface CreatePackageRequest {
	account_id: string
	type_id: string
	name?: string
}

export interface GetPackageLexiconRequest {
	account_ids?: string
	status_ids?: string
}
export interface GetPackagesRequest extends BaseGetRequest {
	ids?: string
	names?: string
	names_like?: string
	account_ids?: string
	package_status_ids?: string
	package_type_ids?: string
	folder_ids?: string | null
	order_by?: 'id' | 'name'
}

export interface UpdatePackageRequest {
	name?: string
	type_id?: string
	folder_id?: string
}

export interface GetPackageStatusesRequest extends BaseGetRequest {
	ids?: string
	order_by?: 'id' | 'name'
}

export interface GetPackageTypesRequest extends BaseGetRequest {
	order_by?: 'id' | 'name'
}
