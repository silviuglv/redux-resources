import { fromJS } from 'immutable'
import { cardActions } from '../actions'
import { stateUtility } from '../../utilities'
import { CardsState } from '../../types'

const state: CardsState = {
	list: stateUtility.getPaginationInitialState(),
	item: stateUtility.getItemInitialState(),
	createCard: stateUtility.getObserverInitialState(),
	updateCard: stateUtility.getObserverInitialState(),
	deleteCard: stateUtility.getObserverInitialState(),
	setDefaultCard: stateUtility.getObserverInitialState(),
}

const initialState = fromJS(state)

export const cards = (state = initialState, action) => {
	switch (action.type) {
		//  list
		case cardActions.GET_CARDS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case cardActions.GET_CARDS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case cardActions.GET_CARDS_FULFILLED:
			return state.merge({
				list: stateUtility.getPaginationFulfilled(action.payload),
			})
		case cardActions.GET_CARDS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  createCard
		case cardActions.CREATE_CARD_INITIAL_STATE:
			return state.merge({
				createCard: stateUtility.getObserverInitialState(),
			})
		case cardActions.CREATE_CARD_LOADING:
			return state.merge({
				createCard: stateUtility.getObserverLoading(),
			})
		case cardActions.CREATE_CARD_FULFILLED:
			return state.merge({
				createCard: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case cardActions.CREATE_CARD_REJECTED:
			return state.merge({
				createCard: stateUtility.getObserverRejected(action.payload),
			})

		//  showCard
		case cardActions.SHOW_CARD_INITIAL_STATE:
			return state.merge({
				showCard: stateUtility.getObserverInitialState(),
			})
		case cardActions.SHOW_CARD_LOADING:
			return state.merge({
				showCard: stateUtility.getObserverLoading(),
			})
		case cardActions.SHOW_CARD_FULFILLED:
			return state.merge({
				showCard: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case cardActions.SHOW_CARD_REJECTED:
			return state.merge({
				showCard: stateUtility.getObserverRejected(action.payload),
			})

		//  updateCard
		case cardActions.UPDATE_CARD_INITIAL_STATE:
			return state.merge({
				updateCard: stateUtility.getObserverInitialState(),
			})
		case cardActions.UPDATE_CARD_LOADING:
			return state.merge({
				updateCard: stateUtility.getObserverLoading(),
			})
		case cardActions.UPDATE_CARD_FULFILLED:
			return state.merge({
				updateCard: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case cardActions.UPDATE_CARD_REJECTED:
			return state.merge({
				updateCard: stateUtility.getObserverRejected(action.payload),
			})

		//  deleteCard
		case cardActions.DELETE_CARD_INITIAL_STATE:
			return state.merge({
				deleteCard: stateUtility.getObserverInitialState(),
			})
		case cardActions.DELETE_CARD_LOADING:
			return state.merge({
				deleteCard: stateUtility.getObserverLoading(),
			})
		case cardActions.DELETE_CARD_FULFILLED:
			return state.merge({
				deleteCard: stateUtility.getObserverFulfilled(),
			})
		case cardActions.DELETE_CARD_REJECTED:
			return state.merge({
				deleteCard: stateUtility.getObserverRejected(action.payload),
			})

		//  setDefaultCard
		case cardActions.SET_DEFAULT_CARD_INITIAL_STATE:
			return state.merge({
				setDefaultCard: stateUtility.getObserverInitialState(),
			})
		case cardActions.SET_DEFAULT_CARD_LOADING:
			return state.merge({
				setDefaultCard: stateUtility.getObserverLoading(),
			})
		case cardActions.SET_DEFAULT_CARD_FULFILLED:
			return state.merge({
				setDefaultCard: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(action.payload),
			})
		case cardActions.SET_DEFAULT_CARD_REJECTED:
			return state.merge({
				setDefaultCard: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
