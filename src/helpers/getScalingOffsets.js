import { scaleBetween } from '../utils/index';

/**
 * Gets the parallax scaling offsets to be applied to an element
 * based upon the percent the element has moved in the viewport
 * and the min/max offsets
 * @returns {Object}
 */

export function getScalingOffsets(offsets, percentMoved) {
    const { scale0, scale1 } = offsets;

    const scale = scaleBetween(percentMoved, scale0.value, scale1.value, 0, 100);
    return {
        scale: {
            value: scale,
        },
    };
}
