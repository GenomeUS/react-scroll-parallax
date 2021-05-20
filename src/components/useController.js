import { useContext } from 'react';
import ParallaxContext from '../helpers/ParallaxContext';

export default () => {
    const parallaxController = useContext(ParallaxContext);

    return { parallaxController };
};
