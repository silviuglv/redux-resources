import { Error, GetPackageStatusesRequest, PackageStatus, PaginatedApiResponse } from '../../types'

const statuses = {
	GET_PACKAGE_STATUSES: '[packageStatuses] GET_PACKAGE_STATUSES',
	PACKAGE_STATUSES_LOADING: '[packageStatuses] PACKAGE_STATUSES_LOADING',
	PACKAGE_STATUSES_FULFILLED: '[packageStatuses] PACKAGE_STATUSES_FULFILLED',
	SET_PACKAGE_STATUSES_REJECTED: '[packageStatuses] SET_PACKAGE_STATUSES_REJECTED',
}

export const packageStatusActions = {
	...statuses,
	getPackageStatuses: (payload: GetPackageStatusesRequest = {}) => ({
		type: statuses.GET_PACKAGE_STATUSES,
		payload,
	}),
	setPackageStatusesLoading: () => ({
		type: statuses.PACKAGE_STATUSES_LOADING,
		payload: null,
	}),
	setPackageStatusesFulfilled: (payload: PaginatedApiResponse<PackageStatus>) => ({
		type: statuses.PACKAGE_STATUSES_FULFILLED,
		payload,
	}),
	setPackageStatusesRejected: (payload: Error) => ({
		type: statuses.SET_PACKAGE_STATUSES_REJECTED,
		payload,
	}),
}
