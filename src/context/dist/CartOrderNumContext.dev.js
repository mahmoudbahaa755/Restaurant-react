"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CartOrderNumContext = _react["default"].createContext({
  orderNum: 0
});

var _default = CartOrderNumContext;
exports["default"] = _default;