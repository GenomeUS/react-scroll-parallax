"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _ParallaxContext = _interopRequireDefault(require("../helpers/ParallaxContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var parallaxController = (0, _react.useContext)(_ParallaxContext.default);
  return {
    parallaxController: parallaxController
  };
};

exports.default = _default;