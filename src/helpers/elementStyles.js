import { getParallaxOffsets } from './getParallaxOffsets';
import { getScalingOffsets } from './getScalingOffsets';

/**
 * Takes a parallax element and set the styles based on the
 * offsets and percent the element has moved though the viewport.
 * @param {object} element
 * @param {number} percentMoved
 */
export function setParallaxStyles(elInner, offsets, scaling, percentMoved) {
    // Get the parallax X and Y offsets
    const {
        x: { value: xv, unit: xu },
        y: { value: yv, unit: yu },
    } = getParallaxOffsets(offsets, percentMoved);

    const {
        scale: {
            value: scale,
        },
    } = getScalingOffsets(scaling, percentMoved);

    let transforms = [];

    if(scale){
        transforms.push(`scale(${scale})`);
    }

    transforms.push( `translate3d(${xv}${xu}, ${yv}${yu}, 0)`);

    // Apply styles
    elInner.style.transform = transforms.join(" ");
}

/**
 * Takes a parallax element and removes parallax offset styles.
 * @param {object} element
 */
export function resetStyles(element) {
    const el = element.elInner;
    el.style.transform = '';
}
