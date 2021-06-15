/**
 * Takes a parallax element and parses the offset props to get the value
 * and unit. Sets these values as offset object accessible on the element.
 * @param {object} element
 */
export default function getScaling(props) {
    const { scale0, scale1 } = props;

    return {
        scale0: {
            value: scale0,
        },
        scale1:  {
            value: scale1,
        },
    };
}
