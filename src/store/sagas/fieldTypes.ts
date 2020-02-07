import { fieldTypeActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { fieldTypeApi } from '../../api'
import { AnyAction } from 'redux'

export function* getFieldTypes({ payload }: AnyAction) {
	try {
		yield put(fieldTypeActions.setFieldTypesLoading())
		const { data } = yield call(fieldTypeApi.getFieldTypes, payload)
		yield put(fieldTypeActions.setFieldTypesFulfilled(data))
	} catch (error) {
		yield put(fieldTypeActions.setFieldTypesRejected(error))
	}
}
//getPresets
export function* getPresets({ field_type_id, payload }: AnyAction) {
	try {
		yield put(fieldTypeActions.getPresetsInitialState())
		yield put(fieldTypeActions.setPresetsLoading())
		const { data } = yield call(fieldTypeApi.getPresets, field_type_id, payload)
		yield put(fieldTypeActions.setPresetsFulfilled(data))
	} catch (error) {
		yield put(fieldTypeActions.setPresetsRejected(error))
	}
}
//createPreset
export function* createPreset({ payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldTypeActions.createPresetInitialState())
		yield put(fieldTypeActions.createPresetLoading())
		const { data } = yield call(fieldTypeApi.createPreset, payload)
		yield put(fieldTypeActions.createPresetFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Account Preset Saved', 2000))
		yield call(fieldTypeApi.getPresets, payload)
		successCb && successCb()
	} catch (error) {
		yield put(fieldTypeActions.createPresetRejected(error))
		errorCb && errorCb()
	}
}

//updatePreset
export function* updatePreset({ preset_id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldTypeActions.updatePresetInitialState())
		yield put(fieldTypeActions.updatePresetLoading())
		const { data } = yield call(fieldTypeApi.updatePreset, preset_id, payload)
		yield put(fieldTypeActions.updatePresetFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Preset updated!', 2000))
		yield call(fieldTypeApi.getPresets, payload.field_type_id)
		successCb && successCb()
	} catch (error) {
		yield put(fieldTypeActions.updatePresetRejected(error))
		errorCb && errorCb()
	}
}
//deletePreset
export function* deletePreset({ preset_id, field_type_id, successCb, errorCb }: AnyAction) {
	try {
		yield put(fieldTypeActions.deletePresetInitialState())
		yield put(fieldTypeActions.deletePresetLoading())
		yield call(fieldTypeApi.deletePreset, preset_id)
		yield put(fieldTypeActions.deletePresetFulfilled())
		yield put(notificationActions.displaySnackbarMessage('Preset deleted.', 2000))
		yield call(fieldTypeApi.getPresets, field_type_id)
		successCb && successCb()
	} catch (error) {
		yield put(fieldTypeActions.deletePresetRejected(error))
		errorCb && errorCb()
	}
}
export function* fieldTypes() {
	yield takeEvery(fieldTypeActions.GET_FIELD_TYPES, getFieldTypes)
	yield takeEvery(fieldTypeActions.GET_PRESETS, getPresets)
	yield takeEvery(fieldTypeActions.CREATE_PRESET, createPreset)
	yield takeEvery(fieldTypeActions.UPDATE_PRESET, updatePreset)
	yield takeEvery(fieldTypeActions.DELETE_PRESET, deletePreset)
}
