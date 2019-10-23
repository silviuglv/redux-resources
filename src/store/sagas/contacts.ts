import { contactActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { contactApi } from '../../api'

interface Props {
	payload
	successCb: (response) => void
	errorCb: (err: Error) => void
}

function* searchContacts({ payload, successCb, errorCb }: Props) {
	try {
		yield put(contactActions.setSearchContactsLoading())
		const { data } = yield call(contactApi.searchContact, payload)
		yield put(contactActions.setSearchContactsFulfilled(data))
		successCb && successCb(data)
	} catch (error) {
		yield put(contactActions.setSearchContactsRejected(error))
		errorCb && errorCb(error)
	}
}

export function* contacts() {
	yield takeEvery<any>(contactActions.SEARCH_CONTACTS, searchContacts)
}
