"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = require("../actionTypes/filters");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  yearFilter: false,
  launchSuccess: null,
  landingSuccess: null
};

var filters = function filters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _filters.LAUNCH_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        launchSuccess: Boolean(action.value)
      });

    case _filters.LANDING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        landingSuccess: Boolean(action.value)
      });

    case _filters.YEAR_FILTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        yearFilter: Boolean(action.value)
      });

    default:
      return state;
  }
};

var _default = filters;
exports["default"] = _default;