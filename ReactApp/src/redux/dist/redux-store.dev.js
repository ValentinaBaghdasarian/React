"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _profileReducer = _interopRequireDefault(require("./reducers/profile-reducer"));

var _dialogReducer = _interopRequireDefault(require("./reducers/dialog-reducer"));

var _usersReducer = _interopRequireDefault(require("./reducers/users-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profile: _profileReducer["default"],
  dialog: _dialogReducer["default"],
  usersPage: _usersReducer["default"]
});
var store = (0, _redux.legacy_createStore)(reducers);
var _default = store;
exports["default"] = _default;
window.store = store;