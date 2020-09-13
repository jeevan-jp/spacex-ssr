"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Filters = _interopRequireDefault(require("../../components/Filters"));

var _Launches = _interopRequireDefault(require("../../components/Launches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Home(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-home"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "SpaceX Launch Programs")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content-container-home"
  }, /*#__PURE__*/_react["default"].createElement(_Filters["default"], props), /*#__PURE__*/_react["default"].createElement(_Launches["default"], props)), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Developed By - Jeevan Praksah")));
}

var _default = Home;
exports["default"] = _default;