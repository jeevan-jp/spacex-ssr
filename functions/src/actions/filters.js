"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = require("../actionTypes/filters");

var launchSuccess = function launchSuccess(value) {
  return {
    type: _filters.LAUNCH_SUCCESS,
    value: value
  };
};

var landingSuccess = function landingSuccess(value) {
  return {
    type: _filters.LANDING_SUCCESS,
    value: value
  };
};

var yearFilter = function yearFilter(value) {
  return {
    type: _filters.YEAR_FILTER,
    value: value
  };
};

var _default = {
  launchSuccess: launchSuccess,
  landingSuccess: landingSuccess,
  yearFilter: yearFilter
};
exports["default"] = _default;