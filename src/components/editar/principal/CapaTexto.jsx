import PropTypes from "prop-types";

/**
 * El componente CapaTexto se encarga de dibujar los textos en el diseñador de polos,
 * de acuerdo a las propiedades actuales de cada capa
 *
 * @param {*} param0
 * @returns
 */

export const CapaTexto = ({ capa, seleccionada }) => {
  console.log("Capa", capa)

  const bgColor = !seleccionada
    ? capa.backgroundColor
    : capa.backgroundColor !== "transparent"
    ? capa.backgroundColor
    : "rgba(255,0,0,0.1)";
  return (
    <div
      className="shadow"
      style={{
        left: capa.left,
        top: capa.top,
        width: capa.width,
        height: capa.height,
        transform: "rotate(" + capa.rotationDeg + "deg)",
        backgroundColor: bgColor,
        color: capa.color,
        fontSize: capa.fontSize,
        fontFamily: capa.fontFamily,
        textAlign: capa.textAlign,
      }}
    >
      {capa.texto}
    </div>
  );
};

CapaTexto.propTypes = {
  capa: PropTypes.shape({
    id: PropTypes.string,
    texto: PropTypes.string,
    zIndex: PropTypes.number,
    background: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    rotationDeg: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    url: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    textAlign: PropTypes.string,
  }),
  seleccionada: PropTypes.bool,
};
