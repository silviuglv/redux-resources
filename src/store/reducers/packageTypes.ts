import { fromJS } from 'immutable'
import { packageTypeActions } from '../actions'
import { stateUtility } from '../../utilities'
import { PackageTypesState } from '../../types'

const state: PackageTypesState = {
	list: stateUtility.getPaginationInitialState(),
}

const initialState = fromJS(state)

export const packageTypes = (state = initialState, action) => {
	//  list
	switch (action.type) {
		case packageTypeActions.PACKAGE_TYPES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case packageTypeActions.PACKAGE_TYPES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case packageTypeActions.SET_PACKAGE_TYPES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
