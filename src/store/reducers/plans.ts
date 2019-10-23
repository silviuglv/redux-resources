import { fromJS } from 'immutable'
import { planActions } from '../actions'
import { stateUtility } from '../../utilities'
import { PlansState } from '../../types'

const state: PlansState = {
	list: stateUtility.getPaginationInitialState(),
}

const initialState = fromJS(state)

export const plans = (state = initialState, action) => {
	//  list
	switch (action.type) {
		//  list
		case planActions.SET_PLANS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case planActions.SET_PLANS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case planActions.SET_PLANS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case planActions.SET_PLANS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		default:
			return state
	}
}
