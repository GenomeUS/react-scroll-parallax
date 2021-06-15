"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScalingOffsets = getScalingOffsets;

var _index = require("../utils/index");

/**
 * Gets the parallax scaling offsets to be applied to an element
 * based upon the percent the element has moved in the viewport
 * and the min/max offsets
 * @returns {Object}
 */
function getScalingOffsets(offsets, percentMoved) {
  var scale0 = offsets.scale0,
      scale1 = offsets.scale1;
  var scale = (0, _index.scaleBetween)(percentMoved, scale0.value, scale1.value, 0, 100);
  return {
    scale: {
      value: scale
    }
  };
}