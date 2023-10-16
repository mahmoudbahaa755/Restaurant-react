"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cartContext = _react["default"].createContext({
  item: [],
  totalAmount: 0,
  orderNum: 0,
  addToCart: function addToCart() {},
  removeFromCart: function removeFromCart() {}
});

console.log(cartContext);
var _default = cartContext;
exports["default"] = _default;