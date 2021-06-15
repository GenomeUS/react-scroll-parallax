"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScaling;

/**
 * Takes a parallax element and parses the offset props to get the value
 * and unit. Sets these values as offset object accessible on the element.
 * @param {object} element
 */
function getScaling(props) {
  var scale0 = props.scale0,
      scale1 = props.scale1;
  return {
    scale0: {
      value: scale0
    },
    scale1: {
      value: scale1
    }
  };
}