import { fromJS } from 'immutable'
import { folderActions } from '../actions'
import { stateUtility } from '../../utilities'
import { FoldersState } from '../../types'

const state: FoldersState = {
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
	createFolder: stateUtility.getObserverInitialState(),
	updateFolder: stateUtility.getObserverInitialState(),
}

const initialState = fromJS(state)

export const folders = (state = initialState, action) => {
	switch (action.type) {
		//  list
		case folderActions.GET_FOLDERS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case folderActions.GET_FOLDERS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case folderActions.GET_FOLDERS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case folderActions.GET_FOLDERS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  createFolder
		case folderActions.CREATE_FOLDER_INITIAL_STATE:
			return state.merge({
				createFolder: stateUtility.getObserverInitialState(),
			})
		case folderActions.CREATE_FOLDER_LOADING:
			return state.merge({
				createFolder: stateUtility.getObserverLoading(),
			})
		case folderActions.CREATE_FOLDER_FULFILLED:
			return state.merge({
				createFolder: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case folderActions.CREATE_FOLDER_REJECTED:
			return state.merge({
				createFolder: stateUtility.getObserverRejected(action.payload),
			})

		//  updateFolder
		case folderActions.UPDATE_FOLDER_INITIAL_STATE:
			return state.merge({
				updateFolder: stateUtility.getObserverInitialState(),
			})
		case folderActions.UPDATE_FOLDER_LOADING:
			return state.merge({
				updateFolder: stateUtility.getObserverLoading(),
			})
		case folderActions.UPDATE_FOLDER_FULFILLED:
			return state.merge({
				updateFolder: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case folderActions.UPDATE_FOLDER_REJECTED:
			return state.merge({
				updateFolder: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
