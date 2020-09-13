"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Loader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader-container"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/puffLoader.svg",
    alt: "loading..."
  }));
}

var _default = Loader;
exports["default"] = _default;