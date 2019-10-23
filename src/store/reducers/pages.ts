import { fromJS } from 'immutable'
import { pageActions } from '../actions'
import { stateUtility } from '../../utilities'
import { PagesState } from '../../types'

const state: PagesState = {
	list: stateUtility.getPaginationInitialState(),
}

const initialState = fromJS(state)

export const pages = (state = initialState, action) => {
	switch (action.type) {
		//  list
		case pageActions.GET_PAGES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case pageActions.GET_PAGES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case pageActions.GET_PAGES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		case pageActions.SET_PAGE_IMAGE:
			const { pageId, payload } = action
			const pages = state.toJS().list
			const pageIndex = pages.data.findIndex((page) => page.id === pageId)
			pages.data[pageIndex].images.push(payload)
			return state.merge({
				list: pages,
			})
		default:
			return state
	}
}
