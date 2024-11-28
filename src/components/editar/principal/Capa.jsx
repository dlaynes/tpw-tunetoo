import PropTypes from "prop-types";
import { ResizableBox } from '@dantecoder/react-resizablebox';
import { useContext } from "react";
import { EditarPoloContext } from "../../../state/editar-polo/EditarPoloContext";
import { NIVEL_SELECCIONADO, TIPO_CAPA } from "../../../state/editar-polo/constantes";
import { CapaImagen } from "./CapaImagen";
import { CapaTexto } from "./CapaTexto";

/**
 * El componente Capa se encarga de mostrar una capa en el editor del diseño de un polo.
 * Le da presentación visual al componente, y muestra las imágenes y textos respectivos.
 * Permite realizar operaciones de rotación, redimensionamiento y cambio de posición mediante la librería ResizableBox
 *
 * Parámetros externos (props)
 * props.capa Capa a ser dibujada
 * props.pos Posición actual de la capa en el array de capas
 *
 * @param {*} param0
 * @returns
 */

export const Capa = ({capa, pos}) => {

  const { actualizarCapa, seleccionarCapa } = useContext(EditarPoloContext);

  const onDragHandler = (e) => {
    actualizarCapa({
      id: capa.id,
      left: e.style.left,
      top: e.style.top,
    })
  };

  const onResizeHandler = (e) => {
    actualizarCapa({
      id: capa.id,
      left: e.style.left,
      top: e.style.top,
      width: e.style.width,
      height: e.style.height
    });
  };

  const onRotateHandler = (e) => {
    actualizarCapa({
      id: capa.id,
      rotationDeg: e.style.rotationDeg
    });
  };

  const nivel = pos + (capa.seleccionada ? NIVEL_SELECCIONADO : 0);

  return (
    <div className={capa.seleccionada ? "capa-actual" : ''} onClick={() => seleccionarCapa(capa)}
      style={{zIndex: nivel}}>
      {(capa.tipo === TIPO_CAPA.galeria || capa.tipo === TIPO_CAPA.imagen) && <CapaImagen capa={capa} />}
      {capa.tipo === TIPO_CAPA.texto && <CapaTexto capa={capa} />}
      <ResizableBox
        key={"resizable-box-"+capa.id+"-"+nivel}
        className="capa"
        width={capa.width}
        height={capa.height}
        left={capa.left}
        top={capa.top}
        rotationDeg={capa.rotationDeg}
        rotatable={capa.seleccionada}
        onRotate={onRotateHandler}
        draggable={true}
        onDrag={onDragHandler}
        resizable={capa.seleccionada}
        onResize={onResizeHandler}
        >{capa.texto}</ResizableBox>
    </div>
  );
};

Capa.propTypes = {
  capa: PropTypes.shape({
    id: PropTypes.string,
    tipo: PropTypes.number,
    texto: PropTypes.string,
    zIndex: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    rotationDeg: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    type: PropTypes.number,
    url: PropTypes.string,
    seleccionada: PropTypes.bool,
  }),
  pos: PropTypes.number
};
