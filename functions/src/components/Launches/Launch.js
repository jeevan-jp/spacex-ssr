"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Launch(props) {
  var _props$details = props.details,
      mission_name = _props$details.mission_name,
      flight_number = _props$details.flight_number,
      mission_id = _props$details.mission_id,
      launch_year = _props$details.launch_year,
      launch_success = _props$details.launch_success,
      links = _props$details.links;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "material-card"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: links.mission_patch_small,
    width: "100%",
    height: "256px",
    alt: "mission logo",
    draggable: "false"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mission-name"
  }, mission_name, " #", flight_number), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Mission Ids"), /*#__PURE__*/_react["default"].createElement("td", null, mission_id.length ? mission_id.join(", ") : "-")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Launch Year"), /*#__PURE__*/_react["default"].createElement("td", null, launch_year)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Successful Launch"), /*#__PURE__*/_react["default"].createElement("td", null, launch_success ? "Yes" : "No")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Successful Landing"), /*#__PURE__*/_react["default"].createElement("td", null, "No Data")))));
}

var _default = Launch;
exports["default"] = _default;