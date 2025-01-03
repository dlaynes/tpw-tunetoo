import PropTypes from "prop-types";
import { colorFondo } from "../../../state/utils/funciones";

/**
 * El componente CapaTexto se encarga de dibujar los textos en el diseñador de polos,
 * de acuerdo a las propiedades actuales de la capa
 *
 * @param {*} param0
 * @returns
 */

export const CapaTexto = ({ capa, seleccionada, imprimiendo, factor }) => {
  const bgColor = colorFondo(capa.backgroundColor, seleccionada, imprimiendo);

  return (
    <div
      className="shadow"
      style={{
        left: capa.left / factor,
        top: capa.top / factor,
        width: capa.width / factor,
        height: capa.height / factor,
        transform: "rotate(" + capa.rotationDeg + "deg)",
        backgroundColor: bgColor,
        textAlign: capa.textAlign,
      }}
    >
      <span
        style={{
          color: capa.color,
          fontSize: capa.fontSize / factor + "px",
          fontFamily: capa.fontFamily,
        }}
      >
        {capa.texto}
      </span>
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
  imprimiendo: PropTypes.bool,
  factor: PropTypes.number,
};
