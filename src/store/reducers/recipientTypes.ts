import { fromJS } from 'immutable'
import { recipientTypeActions } from '../actions'
import { stateUtility } from '../../utilities'
import { RecipientTypesState } from '../../types'

const state: RecipientTypesState = {
	list: stateUtility.getPaginationInitialState(),
}

const initialState = fromJS(state)

export const recipientTypes = (state = initialState, action) => {
	//  list
	switch (action.type) {
		case recipientTypeActions.RECIPIENT_TYPES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case recipientTypeActions.RECIPIENT_TYPES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case recipientTypeActions.SET_RECIPIENT_TYPES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
