import PropTypes from "prop-types";

/**
 * El componente CapaImagen se encarga de dibujar las imágenes en el diseñador de polos,
 * de acuerdo a las propiedades actuales de cada capa
 *
 * @param {*} param0
 * @returns
 */

export const CapaImagen = ({ capa, seleccionada }) => {
  const bgColor = !seleccionada
    ? capa.backgroundColor
    : capa.backgroundColor !== "transparent"
    ? capa.backgroundColor
    : "rgba(255,0,0,0.1)";

  return (
    <div
      className="shadow shadow-image"
      style={{
        left: capa.left,
        top: capa.top,
        width: capa.width,
        height: capa.height,
        transform: "rotate(" + capa.rotationDeg + "deg)",
        backgroundColor: bgColor,
      }}
    >
      <img src={capa.url} alt={capa.titulo} />
    </div>
  );
};

CapaImagen.propTypes = {
  capa: PropTypes.shape({
    id: PropTypes.string,
    titulo: PropTypes.string,
    zIndex: PropTypes.number,
    background: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    rotationDeg: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    url: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  seleccionada: PropTypes.bool,
};
