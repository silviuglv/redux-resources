import { Card, CreateCardRequest, Error, GetCardsRequest, PaginatedApiResponse, UpdateCardRequest } from '../../types'

const types = {
	GET_CARDS: '[cards] GET_CARDS',
	GET_CARDS_INITIAL_STATE: '[cards] GET_CARDS_INITIAL_STATE',
	GET_CARDS_LOADING: '[cards] GET_CARDS_LOADING',
	GET_CARDS_FULFILLED: '[cards] GET_CARDS_FULFILLED',
	GET_CARDS_REJECTED: '[cards] GET_CARDS_REJECTED',

	CREATE_CARD: '[cards] CREATE_CARD',
	CREATE_CARD_INITIAL_STATE: '[cards] CREATE_CARD_INITIAL_STATE',
	CREATE_CARD_LOADING: '[cards] CREATE_CARD_LOADING',
	CREATE_CARD_FULFILLED: '[cards] CREATE_CARD_FULFILLED',
	CREATE_CARD_REJECTED: '[cards] CREATE_CARD_REJECTED',

	SHOW_CARD: '[cards] SHOW_CARD',
	SHOW_CARD_INITIAL_STATE: '[cards] SHOW_CARD_INITIAL_STATE',
	SHOW_CARD_LOADING: '[cards] SHOW_CARD_LOADING',
	SHOW_CARD_FULFILLED: '[cards] SHOW_CARD_FULFILLED',
	SHOW_CARD_REJECTED: '[cards] SHOW_CARD_REJECTED',

	UPDATE_CARD: '[cards] UPDATE_CARD',
	UPDATE_CARD_INITIAL_STATE: '[cards] UPDATE_CARD_INITIAL_STATE',
	UPDATE_CARD_LOADING: '[cards] UPDATE_CARD_LOADING',
	UPDATE_CARD_FULFILLED: '[cards] UPDATE_CARD_FULFILLED',
	UPDATE_CARD_REJECTED: '[cards] UPDATE_CARD_REJECTED',

	DELETE_CARD: '[cards] DELETE_CARD',
	DELETE_CARD_INITIAL_STATE: '[cards] DELETE_CARD_INITIAL_STATE',
	DELETE_CARD_LOADING: '[cards] DELETE_CARD_LOADING',
	DELETE_CARD_FULFILLED: '[cards] DELETE_CARD_FULFILLED',
	DELETE_CARD_REJECTED: '[cards] DELETE_CARD_REJECTED',

	SET_DEFAULT_CARD: '[cards] SET_DEFAULT_CARD',
	SET_DEFAULT_CARD_INITIAL_STATE: '[cards] SET_DEFAULT_CARD_INITIAL_STATE',
	SET_DEFAULT_CARD_LOADING: '[cards] SET_DEFAULT_CARD_LOADING',
	SET_DEFAULT_CARD_FULFILLED: '[cards] SET_DEFAULT_CARD_FULFILLED',
	SET_DEFAULT_CARD_REJECTED: '[cards] SET_DEFAULT_CARD_REJECTED',
}

export const cardActions = {
	...types,
	getCards: (payload: GetCardsRequest) => ({
		type: types.GET_CARDS,
		payload,
	}),
	getCardsInitialState: () => ({
		type: types.GET_CARDS_INITIAL_STATE,
		payload: null,
	}),
	getCardsLoading: () => ({
		type: types.GET_CARDS_LOADING,
		payload: null,
	}),
	getCardsFulfilled: (payload: PaginatedApiResponse<Card>) => ({
		type: types.GET_CARDS_FULFILLED,
		payload,
	}),
	getCardsRejected: (payload: Error) => ({
		type: types.GET_CARDS_REJECTED,
		payload,
	}),

	createCard: (payload: CreateCardRequest, successCb?, errorCb?) => ({
		type: types.CREATE_CARD,
		payload,
		successCb,
		errorCb,
	}),
	createCardInitialState: () => ({
		type: types.CREATE_CARD_INITIAL_STATE,
		payload: null,
	}),
	createCardLoading: () => ({
		type: types.CREATE_CARD_LOADING,
		payload: null,
	}),
	createCardFulfilled: (payload: Card) => ({
		type: types.CREATE_CARD_FULFILLED,
		payload,
	}),
	createCardRejected: (payload: Error) => ({
		type: types.CREATE_CARD_REJECTED,
		payload,
	}),

	showCard: (id: string) => ({
		type: types.SHOW_CARD,
		payload: null,
		id,
	}),
	showCardInitialState: () => ({
		type: types.SHOW_CARD_INITIAL_STATE,
		payload: null,
	}),
	showCardLoading: () => ({
		type: types.SHOW_CARD_LOADING,
		payload: null,
	}),
	showCardFulfilled: (payload: Card) => ({
		type: types.SHOW_CARD_FULFILLED,
		payload,
	}),
	showCardRejected: (payload: Error) => ({
		type: types.SHOW_CARD_REJECTED,
		payload,
	}),

	updateCard: (id: string, payload: UpdateCardRequest, successCb?, errorCb?) => ({
		type: types.UPDATE_CARD,
		payload,
		id,
		successCb,
		errorCb,
	}),
	updateCardInitialState: () => ({
		type: types.UPDATE_CARD_INITIAL_STATE,
		payload: null,
	}),
	updateCardLoading: () => ({
		type: types.UPDATE_CARD_LOADING,
		payload: null,
	}),
	updateCardFulfilled: (payload: Card) => ({
		type: types.UPDATE_CARD_FULFILLED,
		payload,
	}),
	updateCardRejected: (payload: Error) => ({
		type: types.UPDATE_CARD_REJECTED,
		payload,
	}),

	deleteCard: (payload: Card, successCb?, errorCb?) => ({
		type: types.DELETE_CARD,
		payload,
		successCb,
		errorCb,
	}),
	deleteCardInitialState: () => ({
		type: types.DELETE_CARD_INITIAL_STATE,
		payload: null,
	}),
	deleteCardLoading: () => ({
		type: types.DELETE_CARD_LOADING,
		payload: null,
	}),
	deleteCardFulfilled: () => ({
		type: types.DELETE_CARD_FULFILLED,
		payload: null,
	}),
	deleteCardRejected: (payload: Error) => ({
		type: types.DELETE_CARD_REJECTED,
		payload,
	}),

	setDefaultCard: (payload: Card) => ({
		type: types.SET_DEFAULT_CARD,
		payload,
	}),
	setDefaultCardInitialState: () => ({
		type: types.SET_DEFAULT_CARD_INITIAL_STATE,
		payload: null,
	}),
	setDefaultCardLoading: () => ({
		type: types.SET_DEFAULT_CARD_LOADING,
		payload: null,
	}),
	setDefaultCardFulfilled: (payload: Card) => ({
		type: types.SET_DEFAULT_CARD_FULFILLED,
		payload,
	}),
	setDefaultCardRejected: (payload: Error) => ({
		type: types.SET_DEFAULT_CARD_REJECTED,
		payload,
	}),
}
