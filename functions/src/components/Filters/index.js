"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRedux = require("react-redux");

var _actions = _interopRequireDefault(require("../../actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  user-select: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  background: #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n  padding-top: 0;\n  min-width: 150px;\n  background: #fff;\n  border-radius: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 1rem 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function Filters(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var filters = (0, _reactRedux.useSelector)(function (state) {
    return state.filters;
  });

  var turnOnLaunchFilter = function turnOnLaunchFilter() {
    dispatch(_actions["default"].filters.launchSuccess(true));
  };

  var turnOffLaunchFilter = function turnOffLaunchFilter() {
    dispatch(_actions["default"].filters.launchSuccess(false));
  };

  var turnOnLandFilter = function turnOnLandFilter() {
    dispatch(_actions["default"].filters.landingSuccess(true));
  };

  var turnOffLandFilter = function turnOffLandFilter() {
    dispatch(_actions["default"].filters.landingSuccess(false));
  };

  var handleYearChange = function handleYearChange(year) {
    console.log(year);

    if (!filters.yearFilter) {
      dispatch(_actions["default"].filters.yearFilter(true));
    }

    props.history.push("/".concat(year));
  };

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(FilterContainer, null, /*#__PURE__*/_react["default"].createElement(Label, null, "Launch Date"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(ButtonContainer, null, allYears.map(function (year, i) {
    return /*#__PURE__*/_react["default"].createElement(Button, {
      className: "btn-primary",
      key: 'btn' + i,
      onClick: function onClick() {
        return handleYearChange(year);
      },
      active: year === parseInt(props.match.params.year, 10)
    }, year);
  })), /*#__PURE__*/_react["default"].createElement(Label, null, "Successful Launch"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(ButtonContainer, null, /*#__PURE__*/_react["default"].createElement(Button, {
    className: "btn-primary",
    onClick: turnOnLaunchFilter,
    active: filters.launchSuccess
  }, "true"), /*#__PURE__*/_react["default"].createElement(Button, {
    className: "btn-primary",
    onClick: turnOffLaunchFilter,
    active: filters.launchSuccess !== null && filters.launchSuccess === false
  }, "false")), /*#__PURE__*/_react["default"].createElement(Label, null, "Successful Land"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(ButtonContainer, null, /*#__PURE__*/_react["default"].createElement(Button, {
    className: "btn-primary",
    onClick: turnOnLandFilter,
    active: filters.landingSuccess
  }, "true"), /*#__PURE__*/_react["default"].createElement(Button, {
    className: "btn-primary",
    onClick: turnOffLandFilter,
    active: filters.landingSuccess !== null && filters.landingSuccess === false
  }, "false"))));
}

var _default = Filters;
exports["default"] = _default;

var Container = _styledComponents["default"].nav(_templateObject());

var FilterContainer = _styledComponents["default"].div(_templateObject2());

var ButtonContainer = _styledComponents["default"].div(_templateObject3());

var Label = _styledComponents["default"].p(_templateObject4());

var Button = _styledComponents["default"].button(_templateObject5(), function (_ref) {
  var active = _ref.active;
  return active ? '#7cb900' : '#c5e09c';
});