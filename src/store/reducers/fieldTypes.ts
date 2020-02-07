import { fromJS } from 'immutable'
import { fieldTypeActions } from '../actions'
import { stateUtility } from '../../utilities'
import { FieldTypesState } from '../../types'

const state: FieldTypesState = {
	list: stateUtility.getPaginationInitialState(),
	presets: stateUtility.getPaginationInitialState(),
	createPreset: stateUtility.getItemInitialState(),
	updatePreset: stateUtility.getItemInitialState(),
	deletePreset: stateUtility.getObserverInitialState(),
}

const initialState = fromJS(state)

export const fieldTypes = (state = initialState, action) => {
	//  list
	switch (action.type) {
		case fieldTypeActions.FIELD_TYPES_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case fieldTypeActions.FIELD_TYPES_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case fieldTypeActions.SET_FIELD_TYPES_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})
		//getPresets
		case fieldTypeActions.PRESETS_INITIAL_STATE:
			return state.merge({
				presets: stateUtility.getItemInitialState(),
			})
		case fieldTypeActions.PRESETS_LOADING:
			return state.merge({
				presets: stateUtility.getItemLoading(),
			})
		case fieldTypeActions.PRESETS_FULFILLED:
			return state.merge({
				presets: stateUtility.getItemFulfilled(action.payload),
			})
		case fieldTypeActions.SET_PRESETS_REJECTED:
			return state.merge({
				presets: stateUtility.getItemRejected(action.payload),
			})

		//	createPreset
		case fieldTypeActions.CREATE_PRESET_INITIAL_STATE:
			return state.merge({
				createPreset: stateUtility.getItemInitialState(),
			})
		case fieldTypeActions.CREATE_PRESET_LOADING:
			return state.merge({
				createPreset: stateUtility.getItemLoading(),
			})
		case fieldTypeActions.CREATE_PRESET_FULFILLED:
			return state.merge({
				createPreset: stateUtility.getItemFulfilled(action.payload),
			})
		case fieldTypeActions.CREATE_PRESET_REJECTED:
			return state.merge({
				createPreset: stateUtility.getItemRejected(action.payload),
			})

		// updatePreset
		case fieldTypeActions.UPDATE_PRESET_INITIAL_STATE:
			return state.merge({
				updatePreset: stateUtility.getItemInitialState(),
			})
		case fieldTypeActions.UPDATE_PRESET_LOADING:
			return state.merge({
				updatePreset: stateUtility.getItemLoading(),
			})
		case fieldTypeActions.UPDATE_PRESET_FULFILLED:
			return state.merge({
				updatePreset: stateUtility.getItemFulfilled(action.payload),
			})
		case fieldTypeActions.UPDATE_PRESET_REJECTED:
			return state.merge({
				updatePreset: stateUtility.getItemRejected(action.payload),
			})

		// deletePreset
		case fieldTypeActions.DELETE_PRESET_INITIAL_STATE:
			return state.merge({
				deletePreset: stateUtility.getObserverInitialState(),
			})
		case fieldTypeActions.DELETE_PRESET_LOADING:
			return state.merge({
				deletePreset: stateUtility.getObserverLoading(),
			})
		case fieldTypeActions.DELETE_PRESET_FULFILLED:
			return state.merge({
				deletePreset: stateUtility.getObserverFulfilled(),
			})
		case fieldTypeActions.DELETE_PRESET_REJECTED:
			return state.merge({
				deletePreset: stateUtility.getObserverRejected(action.payload),
			})
		default:
			return state
	}
}
