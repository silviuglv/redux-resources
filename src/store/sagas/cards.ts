import { cardActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { cardApi } from '../../api'
import { AnyAction } from 'redux'

function* getCards({ payload }: any) {
	try {
		yield put(cardActions.getCardsInitialState())
		yield put(cardActions.getCardsLoading())
		const { data } = yield call(cardApi.getCards, payload)
		yield put(cardActions.getCardsFulfilled(data))
	} catch (error) {
		yield put(cardActions.getCardsRejected(error))
	}
}

function* createCard({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(cardActions.createCardInitialState())
		yield put(cardActions.createCardLoading())
		const { data } = yield call(cardApi.createCard, payload)
		yield put(cardActions.createCardFulfilled(data))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Card created!', 2000))

		const query = {
			account_ids: payload.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}

		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.createCardRejected(error))
		errorCb && errorCb()
	}
}

function* setDefaultCard({ payload }: AnyAction) {
	try {
		yield put(cardActions.setDefaultCardInitialState())
		yield put(cardActions.setDefaultCardLoading())
		const { data } = yield call(cardApi.setDefaultCard, payload.id)
		yield put(cardActions.setDefaultCardFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Card set as default!', 2000))

		const query = {
			account_ids: payload.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}
		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.setDefaultCardRejected(error))
	}
}

function* deleteCard({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(cardActions.deleteCardInitialState())
		yield put(cardActions.deleteCardLoading())
		yield call(cardApi.deleteCard, payload.id)
		yield put(cardActions.deleteCardFulfilled())
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Card deleted!', 2000))

		const query = {
			account_ids: payload.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}
		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.deleteCardRejected(error))
		errorCb && errorCb()
	}
}

function* updateCard({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(cardActions.updateCardInitialState())
		yield put(cardActions.updateCardLoading())
		const { data } = yield call(cardApi.updateCard, id, payload)
		yield put(cardActions.updateCardFulfilled(data))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Card updated!', 2000))

		const query = {
			account_ids: payload.account_id,
			order_by: 'is_default',
			direction: 'desc',
		}
		yield call(getCards, { query })
	} catch (error) {
		yield put(cardActions.updateCardRejected(error))
		errorCb && errorCb()
	}
}

export function* cards() {
	yield takeEvery(cardActions.GET_CARDS, getCards)
	yield takeEvery(cardActions.CREATE_CARD, createCard)
	yield takeEvery(cardActions.SET_DEFAULT_CARD, setDefaultCard)
	yield takeEvery(cardActions.DELETE_CARD, deleteCard)
	yield takeEvery(cardActions.UPDATE_CARD, updateCard)
}
