import { recipientTypeActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { recipientApi } from '../../api'

export function* getRecipientTypes(payload) {
	try {
		yield put(recipientTypeActions.setRecipientTypesLoading())
		const { data } = yield call(recipientApi.getRecipientTypes, payload)
		yield put(recipientTypeActions.setRecipientTypesFulfilled(data))
	} catch (error) {
		yield put(recipientTypeActions.setRecipientTypesRejected(error))
	}
}

export function* recipientTypes() {
	yield takeEvery(recipientTypeActions.GET_RECIPIENT_TYPES, getRecipientTypes)
}
