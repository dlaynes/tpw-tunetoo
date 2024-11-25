import PropTypes from 'prop-types';
import { useState } from 'react';

export const HoverImage = (props) => {

    const [image, setImage] = useState(props.src);
    return (
        <img
            onMouseEnter={() => setImage(props.hover)}
            onMouseLeave={() => setImage(props.src)}
            src={"/"+image} alt={props.alt} />
    )
};

HoverImage.propTypes = {
    src: PropTypes.string,
    hover: PropTypes.string,
    alt: PropTypes.string
};
