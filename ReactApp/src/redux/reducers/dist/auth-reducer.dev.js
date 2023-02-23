"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAuth = exports.setAuthUserData = void 0;

var _api = require("../../api/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_DATA = 'SET_USER_DATA';
var initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USER_DATA:
      return _objectSpread({}, state, {}, action.data, {
        isAuth: true
      });

    default:
      return state;
  }
};

var setAuthUserData = function setAuthUserData(userId, email, login) {
  return {
    type: SET_USER_DATA,
    data: {
      userId: userId,
      email: email,
      login: login
    }
  };
};

exports.setAuthUserData = setAuthUserData;

var getAuth = function getAuth() {
  return function (dispatch) {
    _api.authAPI.getAuth().then(function (response) {
      if (response.data.resultCode === 0) {
        var _response$data$data = response.data.data,
            email = _response$data$data.email,
            id = _response$data$data.id,
            login = _response$data$data.login;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

exports.getAuth = getAuth;
var _default = authReducer; // const SET_USER_DATA = 'SET_USER_DATA';
// const initialState = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false
// };
// const authReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_USER_DATA:
//             return {
//                 ...state,
//                 ...action.data,
//                 isAuth: true
//             };
//         default:
//             return state;
//     }
// }; 
// export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data:{userId, email, login}});
// export default authReducer;

exports["default"] = _default;