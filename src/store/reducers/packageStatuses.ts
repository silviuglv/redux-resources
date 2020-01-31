import { fromJS } from 'immutable'
import { packageStatusActions } from '../actions'
import { stateUtility } from '../../utilities'
import { PackageStatusesState } from '../../types'

const state: PackageStatusesState = {
	list: stateUtility.getPaginationInitialState(),
}

const initialState = fromJS(state)

export const packageStatuses = (state = initialState, action) => {
	//  list
	switch (action.status) {
		case packageStatusActions.PACKAGE_STATUSES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case packageStatusActions.PACKAGE_STATUSES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageStatusActions.SET_PACKAGE_STATUSES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
