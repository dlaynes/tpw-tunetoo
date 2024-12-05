import PropTypes from "prop-types";
import { useState } from "react";

/**
 * El componente HoverImage permite mostrar una imagen diferente cuando el mouse se ubica encima,
 * cambiando la imagen que es normalmente presentada al usuario
 *
 * Parámetros externos (props)
 * props.src : imagen normal
 * props.hover : imagen que aparece al ubicar el mouse encima
 * props.alt : texto alternativo
 *
 * @param {*} props
 * @returns
 */
export const HoverImage = (props) => {
  const [image, setImage] = useState(props.src);
  return (
    <img
      onMouseEnter={() => setImage(props.hover)}
      onMouseLeave={() => setImage(props.src)}
      src={image}
      alt={props.alt}
    />
  );
};

HoverImage.propTypes = {
  src: PropTypes.string,
  hover: PropTypes.string,
  alt: PropTypes.string,
};
