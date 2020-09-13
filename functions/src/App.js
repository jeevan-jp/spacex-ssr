"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

require("./App.css");

var _reducers = _interopRequireDefault(require("./reducers"));

var _Home = _interopRequireDefault(require("./pages/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_reducers["default"]);

function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _Home["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/:year",
    component: _Home["default"]
  }))));
}

var _default = App;
exports["default"] = _default;