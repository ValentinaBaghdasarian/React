"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState;

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'x':
      console.log(x);
      return stateCopy;

    case 'y':
      console.log(y);
      return stateCopy;

    default:
      return stateCopy;
  }
};

var _default = userReducer;
exports["default"] = _default;