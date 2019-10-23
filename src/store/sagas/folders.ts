import { folderActions, notificationActions } from '../actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { folderApi } from '../../api'
import { AnyAction } from 'redux'

function* getFolders({ payload }: AnyAction) {
	try {
		yield put(folderActions.getFoldersInitialState())
		yield put(folderActions.getFoldersLoading())
		const { data } = yield call(folderApi.getFolders, payload)
		yield put(folderActions.getFoldersFulfilled(data))
	} catch (error) {
		yield put(folderActions.getFoldersRejected(error))
	}
}

function* createFolder({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(folderActions.createFolderInitialState())
		yield put(folderActions.createFolderLoading())
		const { data } = yield call(folderApi.createFolder, payload)
		yield put(folderActions.createFolderFulfilled(data))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Folder created!', 2000))

		const query = {
			account_ids: data.account_id,
		}
		yield call<any>(getFolders, { query })
	} catch (error) {
		yield put(folderActions.createFolderRejected(error))
		errorCb && errorCb()
	}
}

function* updateFolder({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(folderActions.updateFolderInitialState())
		yield put(folderActions.updateFolderLoading())
		const { data } = yield call<any>(folderApi.updateFolder, id, payload)
		yield put(folderActions.updateFolderFulfilled(data))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Folder updated!', 2000))

		const query = {
			account_ids: data.account_id,
		}
		yield call<any>(getFolders, { query })
	} catch (error) {
		yield put(folderActions.updateFolderRejected(error))
		errorCb && errorCb()
	}
}

export function* folders() {
	yield takeEvery(folderActions.GET_FOLDERS, getFolders)
	yield takeEvery(folderActions.CREATE_FOLDER, createFolder)
	yield takeEvery(folderActions.UPDATE_FOLDER, updateFolder)
}
