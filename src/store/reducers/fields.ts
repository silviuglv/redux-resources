import { fromJS } from 'immutable'
import { fieldActions } from '../actions'
import { stateUtility } from '../../utilities'
import { FieldsState } from '../../types'

const state: FieldsState = {
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
}

const initialState = fromJS(state)

export const fields = (state = initialState, action) => {
	switch (action.type) {
		//  list
		case fieldActions.GET_FIELDS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case fieldActions.GET_FIELDS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case fieldActions.GET_FIELDS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  item
		case fieldActions.SET_ITEM_LOADING:
			return state.merge({
				item: stateUtility.getItemLoading(),
			})
		case fieldActions.SET_ITEM_FULFILLED:
			return state.merge({
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case fieldActions.SET_ITEM_REJECTED:
			return state.merge({
				item: stateUtility.getItemRejected(action.payload),
			})

		case fieldActions.ADD_ITEM_TO_LIST:
			return state.merge({
				list: stateUtility.addItemToPagination(state.toJS().list, action.payload, false),
			})
		case fieldActions.UPDATE_ITEM_IN_LIST:
			return state.merge({
				list: stateUtility.updateItemInPagination(state.toJS().list, action.payload),
			})
		case fieldActions.REMOVE_ITEM_IN_LIST:
			return state.merge({
				list: stateUtility.removeItemFromPagination(state.toJS().list, action.fieldId),
			})
		default:
			return state
	}
}
