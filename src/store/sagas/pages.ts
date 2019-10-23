import { pageActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { pageApi } from '../../api'
import { AnyAction } from 'redux'

export function* getPages({ packageId, documentId, successCb, errorCb }: AnyAction) {
	try {
		yield put(pageActions.getPagesLoading())
		const { data } = yield call(pageApi.getPages, packageId, documentId)
		yield put(pageActions.getPagesFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(pageActions.getPagesRejected(error))
		errorCb && errorCb()
	}
}

export function* getPageImage({ pageId, image_url, successCb, errorCb }: AnyAction) {
	try {
		const { data } = yield call(pageApi.getPageImage, image_url)
		yield put(pageActions.setPageImage(pageId, data))
		successCb && successCb()
	} catch (error) {
		yield put(pageActions.getPagesRejected(error))
		errorCb && errorCb()
	}
}

export function* pages() {
	yield takeEvery(pageActions.GET_PAGES, getPages)
	yield takeEvery(pageActions.GET_PAGE_IMAGE, getPageImage)
}
