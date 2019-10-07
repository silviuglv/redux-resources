var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

import { accountInviteActions, notificationActions } from '../actions';
import { put, takeEvery, call, select } from 'redux-saga/effects';
import { accountInviteApi } from '../../api';
import { authUser } from '../selectors';
export function getAccountInvites(_a) {
  var response, error_1;
  var query = _a.query;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 5,, 7]);

        return [4
        /*yield*/
        , put(accountInviteActions.accountInvitesInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountInviteActions.accountInvitesLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountInviteApi.getAccountInvites, query)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.accountInvitesFulfilled(response))];

      case 4:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 5:
        error_1 = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.accountInvitesRejected(error_1))];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 7];

      case 7:
        return [2
        /*return*/
        ];
    }
  });
}
export function deleteAccountInvite(_a) {
  var response, error_2;
  var invite = _a.invite,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountInviteApi.deleteAccountInvite, invite.id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteFulfilled(response))];

      case 4:
        _b.sent();

        successCb && successCb();
        return [4
        /*yield*/
        , call(getAccountInvites, {
          query: {
            account_ids: invite.account.id,
            status: 'pending'
          }
        })];

      case 5:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account Invitation Deleted!', 2000))];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_2 = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteRejected(error_2))];

      case 8:
        _b.sent();

        errorCb && errorCb();
        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}
export function deleteMyAccountInvite(_a) {
  var response, error_3;
  var invite = _a.invite;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteLoading())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , call(accountInviteApi.deleteAccountInvite, invite.id)];

      case 2:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteFulfilled(response))];

      case 3:
        _b.sent();

        return [4
        /*yield*/
        , call(myAccountInvites)];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account Invitation Deleted!', 2000))];

      case 5:
        _b.sent();

        return [3
        /*break*/
        , 8];

      case 6:
        error_3 = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.deleteAccountInviteRejected(error_3))];

      case 7:
        _b.sent();

        return [3
        /*break*/
        , 8];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
export function createAccountInvite(_a) {
  var response, error_4;
  var invite = _a.invite,
      successCb = _a.successCb,
      errorCb = _a.errorCb;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6,, 8]);

        return [4
        /*yield*/
        , put(accountInviteActions.createAccountInviteInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountInviteActions.createAccountInviteLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountInviteApi.create, invite)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.createAccountInviteFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , call(getAccountInvites, {
          query: {
            account_ids: invite.account_id,
            status: 'pending'
          }
        })];

      case 5:
        _b.sent();

        successCb && successCb();
        return [3
        /*break*/
        , 8];

      case 6:
        error_4 = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.createAccountInviteRejected(error_4))];

      case 7:
        _b.sent();

        errorCb && errorCb(error_4);
        return [3
        /*break*/
        , 8];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
export function acceptAccountInvite(_a) {
  var response, error_5;
  var invite = _a.invite;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 7,, 9]);

        return [4
        /*yield*/
        , put(accountInviteActions.acceptAccountInviteInitialState())];

      case 1:
        _b.sent();

        return [4
        /*yield*/
        , put(accountInviteActions.acceptAccountInviteLoading())];

      case 2:
        _b.sent();

        return [4
        /*yield*/
        , call(accountInviteApi.accept, invite.id)];

      case 3:
        response = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.acceptAccountInviteFulfilled(response))];

      case 4:
        _b.sent();

        return [4
        /*yield*/
        , call(myAccountInvites)];

      case 5:
        _b.sent();

        return [4
        /*yield*/
        , put(notificationActions.displaySnackbarMessage('Account Invitation Accepted!', 2000))];

      case 6:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_5 = _b.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.acceptAccountInviteRejected(error_5))];

      case 8:
        _b.sent();

        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}
export function myAccountInvites() {
  var state, user, response, error_6;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , select()];

      case 1:
        state = _a.sent();
        user = authUser(state);
        _a.label = 2;

      case 2:
        _a.trys.push([2, 7,, 9]);

        return [4
        /*yield*/
        , put(accountInviteActions.getMyAccountInvitesInitialState())];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , put(accountInviteActions.getMyAccountInvitesLoading())];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , call(accountInviteApi.getAccountInvites, {
          emails: user.data.email,
          status: 'pending'
        })];

      case 5:
        response = _a.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.getMyAccountInvitesFulfilled(response))];

      case 6:
        _a.sent();

        return [3
        /*break*/
        , 9];

      case 7:
        error_6 = _a.sent();
        return [4
        /*yield*/
        , put(accountInviteActions.getMyAccountInvitesRejected(error_6))];

      case 8:
        _a.sent();

        return [3
        /*break*/
        , 9];

      case 9:
        return [2
        /*return*/
        ];
    }
  });
}
export default function rootSaga() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , takeEvery(accountInviteActions.GET_ACCOUNT_INVITES, getAccountInvites)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountInviteActions.DELETE_ACCOUNT_INVITE, deleteAccountInvite)];

      case 2:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountInviteActions.DELETE_MY_ACCOUNT_INVITE, deleteMyAccountInvite)];

      case 3:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountInviteActions.CREATE_ACCOUNT_INVITE, createAccountInvite)];

      case 4:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountInviteActions.ACCEPT_ACCOUNT_INVITE, acceptAccountInvite)];

      case 5:
        _a.sent();

        return [4
        /*yield*/
        , takeEvery(accountInviteActions.GET_MY_ACCOUNT_INVITES, myAccountInvites)];

      case 6:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}