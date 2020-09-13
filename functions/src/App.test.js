"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('check title of the document', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], null)),
      getByText = _render.getByText;

  var linkElement = getByText(/from 2006/i);
  expect(linkElement).toBeInTheDocument();
});