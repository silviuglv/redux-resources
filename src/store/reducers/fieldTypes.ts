import { fromJS } from 'immutable'
import { fieldTypeActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'
import { FieldTypesState } from '../../types/app'

const state: FieldTypesState = {
	list: stateUtility.getPaginationInitialState(),
}

const initialState = fromJS(state)

export default (state = initialState, action) => {
	//  list
	switch (action.type) {
		case fieldTypeActions.FIELD_TYPES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case fieldTypeActions.FIELD_TYPES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload.data),
			})
		case fieldTypeActions.SET_FIELD_TYPES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
