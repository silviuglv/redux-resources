import { documentActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { documentApi } from '../../api'
import fileDownload from 'js-file-download'
import { AnyAction } from 'redux'

export function* getDocuments({ payload }: AnyAction) {
	try {
		yield put(documentActions.getDocumentsLoading())
		const { data } = yield call(documentApi.getDocuments, payload)
		yield put(documentActions.getDocumentsFulfilled(data))
	} catch (error) {
		yield put(documentActions.getDocumentsRejected(error))
	}
}

export function* previewDocument({ payload }: any) {
	try {
		yield put(documentActions.downloadDocumentLoading())
		const { data } = yield call(documentApi.downloadDocument, payload.id, payload.provider)
		const fileURL = URL.createObjectURL(data)
		window.open(fileURL)
		window.focus()

		yield put(documentActions.downloadDocumentFulfilled())
	} catch (error) {
		yield put(documentActions.downloadDocumentRejected(error))
	}
}

export function* downloadDocument({ payload, preview }: AnyAction) {
	try {
		if (preview === true) {
			yield call(previewDocument, { payload })
			return
		}

		yield put(documentActions.downloadDocumentLoading())

		if (payload.provider === 'approveme') {
			const downloadResponse = yield call(documentApi.downloadDocument, payload.id, payload.provider)
			const fileName = downloadResponse.headers['content-disposition'].replace('attachment; filename=', '')
			fileDownload(downloadResponse.data, fileName, downloadResponse.headers['content-type'])
		} else {
			const win = window.open(payload.download_url, '_blank')
			win.focus()
		}

		yield put(documentActions.downloadDocumentFulfilled())
	} catch (error) {
		yield put(documentActions.downloadDocumentRejected(error))
	}
}

export function* documents() {
	yield takeEvery(documentActions.GET_DOCUMENTS, getDocuments)
	yield takeEvery(documentActions.DOWNLOAD_DOCUMENT, downloadDocument)
}
