import { PackageTypes } from '../models/types'
import { BaseGetRequest } from './types'

export interface CreatePackageRequest {
	account_id: string
	type_id: PackageTypes
	name: string | undefined
}

export interface GetPackagesRequest extends BaseGetRequest {
	ids: string | undefined
	account_ids: string | undefined
	package_status_ids: string | undefined
	package_type_ids: string | undefined
	folder_ids: string | null | undefined
}
