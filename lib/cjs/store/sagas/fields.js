"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var effects_1 = require("redux-saga/effects");
var api_1 = require("../../api");
function getFields(_a) {
    var response, error_1;
    var packageId = _a.packageId, _b = _a.query, query = _b === void 0 ? {} : _b, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.getFieldsLoading())];
            case 1:
                _c.sent();
                return [4 /*yield*/, effects_1.call(api_1.fieldApi.getFields, packageId, query)];
            case 2:
                response = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.getFieldsFulfilled(response))];
            case 3:
                _c.sent();
                successCb && successCb();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _c.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.getFieldsRejected(error_1))];
            case 5:
                _c.sent();
                errorCb && errorCb();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.getFields = getFields;
function createField(_a) {
    var response, error_2;
    var packageId = _a.packageId, documentId = _a.documentId, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemLoading())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.fieldApi.createField, packageId, documentId, data)];
            case 2:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemFulfilled(response))];
            case 3:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 6];
            case 4:
                error_2 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemRejected(error_2))];
            case 5:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
function updateField(_a) {
    var response, error_3;
    var packageId = _a.packageId, documentId = _a.documentId, fieldId = _a.fieldId, data = _a.data, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemLoading())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.fieldApi.updateField, packageId, documentId, fieldId, data)];
            case 2:
                response = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemFulfilled(response))];
            case 3:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 6];
            case 4:
                error_3 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemRejected(error_3))];
            case 5:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
function deleteField(_a) {
    var error_4;
    var packageId = _a.packageId, documentId = _a.documentId, fieldId = _a.fieldId, successCb = _a.successCb, errorCb = _a.errorCb;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemLoading())];
            case 1:
                _b.sent();
                return [4 /*yield*/, effects_1.call(api_1.fieldApi.deleteField, packageId, documentId, fieldId)];
            case 2:
                _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemFulfilled(null))];
            case 3:
                _b.sent();
                successCb && successCb();
                return [3 /*break*/, 6];
            case 4:
                error_4 = _b.sent();
                return [4 /*yield*/, effects_1.put(actions_1.fieldActions.setItemRejected(error_4))];
            case 5:
                _b.sent();
                errorCb && errorCb();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(actions_1.fieldActions.GET_FIELDS, getFields)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.fieldActions.CREATE_FIELD, createField)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.fieldActions.UPDATE_FIELD, updateField)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(actions_1.fieldActions.DELETE_FIELD, deleteField)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;