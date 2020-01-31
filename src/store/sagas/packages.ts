import { packageActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { packageApi } from '../../api'
import fileDownload from 'js-file-download'
import { AnyAction } from 'redux'

function* getPackages({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPackagesInitialState())
		yield put(packageActions.getPackagesLoading())
		const { data } = yield call(packageApi.getPackages, payload)
		yield put(packageActions.getPackagesFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.getPackagesRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getPackageLexicon({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPackageLexiconInitialState())
		yield put(packageActions.getPackageLexiconLoading())
		const { data } = yield call(packageApi.getPackageLexicon, payload)
		yield put(packageActions.getPackageLexiconFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.getPackageLexiconRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* showPackage({ id, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.showPackageInitialState())
		yield put(packageActions.showPackageLoading())
		const { data } = yield call(packageApi.showPackage, id)
		yield put(packageActions.showPackageFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.showPackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* deletePackage({ id, successCb, errorCb }: AnyAction) {
	try {
		//	yield put(packageActions.deletePackageInitialState())
		//	yield put(packageActions.deletePackageLoading())
		yield call(packageApi.deletePackage, id)
		//	yield put(packageActions.deletePackageFulfilled())
		yield put(notificationActions.displaySnackbarMessage('Package deleted', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deletePackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* createPackage({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createPackageInitialState())
		yield put(packageActions.createPackageLoading())
		const { data } = yield call(packageApi.createPackage, payload)
		yield put(packageActions.createPackageFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.createPackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* updatePackage({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.updatePackageInitialState())
		yield put(packageActions.updatePackageLoading())
		const { data } = yield call(packageApi.updatePackage, id, payload)
		yield put(packageActions.updatePackageFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.updatePackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getDocuments({ id, payload = {}, successCb = undefined, errorCb = undefined }: AnyAction) {
	try {
		yield put(packageActions.getPackageDocumentsInitialState())
		yield put(packageActions.getPackageDocumentsLoading())
		const { data } = yield call(packageApi.getDocuments, id, payload)
		yield put(packageActions.getPackageDocumentsFulfilled(data))
		successCb && successCb()
	} catch (error) {
		yield put(packageActions.getPackageDocumentsRejected(error))
		errorCb && errorCb()
	}
}

function* getPages({ packageId, payload = {}, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPagesInitialState())
		yield put(packageActions.getPagesLoading())
		const { data } = yield call(packageApi.getPages, packageId, payload)
		yield put(packageActions.getPagesFulfilled(data))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.getPagesRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* createDocuments({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createPackageDocumentsInitialState())
		yield put(packageActions.createPackageDocumentsLoading())
		const { data } = yield call(packageApi.createDocuments, id, payload)
		yield put(packageActions.createPackageDocumentsFulfilled(data))
		successCb !== undefined && successCb(data)
	} catch (error) {
		yield put(packageActions.createPackageDocumentsRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* createDocumentsBuild({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createPackageDocumentsInitialState())
		yield put(packageActions.createPackageDocumentsLoading())
		const { data } = yield call(packageApi.createDocumentsBuild, id, payload)
		yield put(packageActions.createPackageDocumentsFulfilled(data))
		successCb !== undefined && successCb(data)
	} catch (error) {
		yield put(packageActions.createPackageDocumentsRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* updateDocument({ packageId, documentId, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.updateDocumentInitialState())
		yield put(packageActions.updateDocumentLoading())
		yield call(packageApi.updateDocument, packageId, documentId, payload)
		const { data } = yield call(packageApi.getDocuments, packageId)
		yield put(packageActions.getPackageDocumentsFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Document name updated', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.updateDocumentRejected(error))
		yield put(notificationActions.displaySnackbarMessage('Failed to update name', 2000))
		errorCb !== undefined && errorCb()
	}
}

function* createDocumentFromSocialAccount({ id, socialAccountId, externalFileId, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createDocumentFromSocialAccountInitialState())
		yield put(packageActions.createDocumentFromSocialAccountLoading())
		const { data } = yield call(packageApi.createDocumentFromSocialAccount, id, socialAccountId, externalFileId)
		yield put(packageActions.createDocumentFromSocialAccountFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Document imported!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.createDocumentFromSocialAccountRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* downloadPackageDocument({ id, documentId, successCb, errorCb }: AnyAction) {
	try {
		const response = yield call(packageApi.downloadDocument, id, documentId)
		const fileName = response.headers['content-disposition'].replace('attachment; filename=', '')
		fileDownload(response.data, fileName, response.headers['content-type'])
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getPackageImageUrl({ id, image_url, successCb, errorCb }: AnyAction) {
	try {
		const imageUrl = yield call(packageApi.getDocumentPageImageUrl, image_url)
		yield put(packageActions.setPackageImageUrl(id, imageUrl))
		successCb !== undefined && successCb()
	} catch (error) {
		//  yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getDocumentImageUrl({ documentId, image_url, successCb, errorCb }: AnyAction) {
	try {
		const imageUrl = yield call(packageApi.getDocumentPageImageUrl, image_url)
		yield put(packageActions.setDocumentImageUrl(documentId, imageUrl))
		successCb !== undefined && successCb()
	} catch (error) {
		//  yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getDocumentPageImageUrl({ documentId, pageId, image_url, successCb, errorCb }: AnyAction) {
	try {
		const imageUrl = yield call(packageApi.getDocumentPageImageUrl, image_url)
		yield put(packageActions.setDocumentPageImageUrl(documentId, pageId, imageUrl))
		successCb !== undefined && successCb()
	} catch (error) {
		//  yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* publish({ packageId, successCb, errorCb }: AnyAction) {
	try {
		//	yield put(packageActions.showPackageLoading())
		const { data } = yield call(packageApi.publish, packageId)
		yield put(packageActions.showPackageFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Package published!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.showPackageRejected(error))
		yield put(notificationActions.displaySnackbarMessage(error.message, 2000))
		errorCb !== undefined && errorCb()
	}
}

function* deleteDocument({ id, documentId, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.deleteDocumentInitialState())
		yield put(packageActions.deleteDocumentLoading())
		yield call(packageApi.deleteDocument, id, documentId)
		yield put(packageActions.deleteDocumentFulfilled(documentId))
		yield put(notificationActions.displaySnackbarMessage('Document deleted', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* resendSigningEmail({ id }: AnyAction) {
	try {
		yield put(packageActions.resendSignatureEmailInitialState())
		yield put(packageActions.resendSignatureEmailLoading())
		const { data } = yield call(packageApi.resendSigningEmail, id)
		yield put(packageActions.resendSignatureEmailFulfilled(data))
	} catch (error) {
		yield put(packageActions.resendSignatureEmailRejected(error))
	}
}

export function* packages() {
	yield takeEvery(packageActions.GET_PACKAGES, getPackages)
	yield takeEvery(packageActions.GET_PACKAGE_LEXICON, getPackageLexicon)
	yield takeEvery(packageActions.SHOW_PACKAGE, showPackage)
	yield takeEvery(packageActions.CREATE_PACKAGE, createPackage)
	yield takeEvery(packageActions.UPDATE_PACKAGE, updatePackage)
	yield takeEvery(packageActions.DELETE_PACKAGE, deletePackage)
	yield takeEvery(packageActions.DOWNLOAD_PACKAGE_DOCUMENT, downloadPackageDocument)
	yield takeEvery(packageActions.GET_PACKAGE_DOCUMENTS, getDocuments)
	yield takeEvery(packageActions.GET_PAGES, getPages)
	yield takeEvery(packageActions.CREATE_PACKAGE_DOCUMENTS, createDocuments)
	yield takeEvery(packageActions.CREATE_PACKAGE_DOCUMENTS_BUILD, createDocumentsBuild)
	yield takeEvery(packageActions.UPDATE_DOCUMENT, updateDocument)
	yield takeEvery(packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE, createDocumentFromSocialAccount)
	yield takeEvery(packageActions.DELETE_DOCUMENT, deleteDocument)
	yield takeEvery(packageActions.GET_PACKAGE_IMAGE_URL, getPackageImageUrl)
	yield takeEvery(packageActions.GET_DOCUMENT_IMAGE_URL, getDocumentImageUrl)
	yield takeEvery(packageActions.GET_DOCUMENT_PAGE_IMAGE_URL, getDocumentPageImageUrl)
	yield takeEvery(packageActions.PUBLISH, publish)
	yield takeEvery(packageActions.RESEND_SIGNATURE_EMAIL, resendSigningEmail)
}
