import { Error, GetPackageTypesRequest, PackageType, PaginatedApiResponse } from '../../types'

const types = {
	GET_PACKAGE_TYPES: '[packageTypes] GET_PACKAGE_TYPES',
	PACKAGE_TYPES_LOADING: '[packageTypes] PACKAGE_TYPES_LOADING',
	PACKAGE_TYPES_FULFILLED: '[packageTypes] PACKAGE_TYPES_FULFILLED',
	SET_PACKAGE_TYPES_REJECTED: '[packageTypes] SET_PACKAGE_TYPES_REJECTED',
}

export const packageTypeActions = {
	...types,
	getPackageTypes: (payload: GetPackageTypesRequest = {}) => ({
		type: types.GET_PACKAGE_TYPES,
		payload,
	}),
	setPackageTypesLoading: () => ({
		type: types.PACKAGE_TYPES_LOADING,
		payload: null,
	}),
	setPackageTypesFulfilled: (payload: PaginatedApiResponse<PackageType>) => ({
		type: types.PACKAGE_TYPES_FULFILLED,
		payload,
	}),
	setPackageTypesRejected: (payload: Error) => ({
		type: types.SET_PACKAGE_TYPES_REJECTED,
		payload,
	}),
}
