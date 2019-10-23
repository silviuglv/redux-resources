import {
	CreateFolderRequest,
	Error,
	Folder,
	GetFoldersRequest,
	PaginatedApiResponse,
	UpdateFolderRequest,
} from '../../types'

const types = {
	GET_FOLDERS: '[folders] GET_FOLDERS',
	GET_FOLDERS_INITIAL_STATE: '[folders] GET_FOLDERS_INITIAL_STATE',
	GET_FOLDERS_LOADING: '[folders] GET_FOLDERS_LOADING',
	GET_FOLDERS_FULFILLED: '[folders] GET_FOLDERS_FULFILLED',
	GET_FOLDERS_REJECTED: '[folders] GET_FOLDERS_REJECTED',
	CREATE_FOLDER: '[folders] CREATE_FOLDER',
	CREATE_FOLDER_INITIAL_STATE: '[folders] CREATE_FOLDER_INITIAL_STATE',
	CREATE_FOLDER_LOADING: '[folders] CREATE_FOLDER_LOADING',
	CREATE_FOLDER_FULFILLED: '[folders] CREATE_FOLDER_FULFILLED',
	CREATE_FOLDER_REJECTED: '[folders] CREATE_FOLDER_REJECTED',
	UPDATE_FOLDER: '[folders] UPDATE_FOLDER',
	UPDATE_FOLDER_INITIAL_STATE: '[folders] UPDATE_FOLDER_INITIAL_STATE',
	UPDATE_FOLDER_LOADING: '[folders] UPDATE_FOLDER_LOADING',
	UPDATE_FOLDER_FULFILLED: '[folders] UPDATE_FOLDER_FULFILLED',
	UPDATE_FOLDER_REJECTED: '[folders] UPDATE_FOLDER_REJECTED',
}

export const folderActions = {
	...types,
	getFolders: (payload: GetFoldersRequest = {}) => ({
		type: types.GET_FOLDERS,
		payload,
	}),
	getFoldersInitialState: () => ({
		type: types.GET_FOLDERS_INITIAL_STATE,
		payload: null,
	}),
	getFoldersLoading: () => ({
		type: types.GET_FOLDERS_LOADING,
		payload: null,
	}),
	getFoldersFulfilled: (payload: PaginatedApiResponse<Folder>) => ({
		type: types.GET_FOLDERS_FULFILLED,
		payload,
	}),
	getFoldersRejected: (payload: Error) => ({
		type: types.GET_FOLDERS_REJECTED,
		payload,
	}),

	createFolder: (payload: CreateFolderRequest, successCb, errorCb) => ({
		type: types.CREATE_FOLDER,
		payload,
		successCb,
		errorCb,
	}),
	createFolderInitialState: () => ({
		type: types.CREATE_FOLDER_INITIAL_STATE,
		payload: null,
	}),
	createFolderLoading: () => ({
		type: types.CREATE_FOLDER_LOADING,
		payload: null,
	}),
	createFolderFulfilled: (payload: Folder) => ({
		type: types.CREATE_FOLDER_FULFILLED,
		payload,
	}),
	createFolderRejected: (payload: Error) => ({
		type: types.CREATE_FOLDER_REJECTED,
		payload,
	}),

	updateFolder: (id: string, payload: UpdateFolderRequest) => ({
		type: types.UPDATE_FOLDER,
		payload,
		id,
	}),
	updateFolderInitialState: () => ({
		type: types.UPDATE_FOLDER_INITIAL_STATE,
		payload: null,
	}),
	updateFolderLoading: () => ({
		type: types.UPDATE_FOLDER_LOADING,
		payload: null,
	}),
	updateFolderFulfilled: (payload: Folder) => ({
		type: types.UPDATE_FOLDER_FULFILLED,
		payload,
	}),
	updateFolderRejected: (payload: Error) => ({
		type: types.UPDATE_FOLDER_REJECTED,
		payload,
	}),
}
