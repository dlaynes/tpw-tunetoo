import PropTypes from "prop-types";
import { ResizableBox } from "@dantecoder/react-resizablebox";
import { useContext } from "react";
import { EditarPoloContext } from "../../../state/editar-polo/EditarPoloContext";
import { NIVEL_SELECCIONADO, TIPO_CAPA, LIMITE_CAPAS } from "../../../state/utils/constantes";
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

export const Capa = ({ capa, pos, seleccionada, imprimiendo }) => {
  const { actualizarCapa, seleccionarCapa } = useContext(EditarPoloContext);

  // Escuchamos el evento Drag (arrastre) del ResizableBox
  const onDragHandler = (e) => {
    actualizarCapa({
      id: capa.id,
      left: e.style.left,
      top: e.style.top,
    });
  };

  // Escuchamos el evento Redimensionamiento del ResizableBox
  const onResizeHandler = (e) => {
    actualizarCapa({
      id: capa.id,
      left: e.style.left,
      top: e.style.top,
      width: e.style.width,
      height: e.style.height,
    });
  };

  // Escuchamos el evento rotación del ResizableBox
  const onRotateHandler = (e) => {
    actualizarCapa({
      id: capa.id,
      rotationDeg: e.style.rotationDeg,
    });
  };

  // Ordenamos de manera inversa al orden existente en el listado lateral de capas.
  // Agregamos un bonus si la capa se encuentra seleccionada
  const nivel = (LIMITE_CAPAS - pos) + (seleccionada ? NIVEL_SELECCIONADO : 0);

  return (
    <div
      className={seleccionada ? "capa-actual" : ""}
      onClick={() => seleccionarCapa(capa)}
      style={{ zIndex: nivel, position: 'relative' }}
      key={"capa-" + capa.id + "-" + nivel}
    >
      {(capa.tipo === TIPO_CAPA.galeria || capa.tipo === TIPO_CAPA.imagen) && (
        <CapaImagen  capa={capa} seleccionada={seleccionada} imprimiendo={imprimiendo} />
      )}
      {capa.tipo === TIPO_CAPA.texto && (
        <CapaTexto  capa={capa} seleccionada={seleccionada} imprimiendo={imprimiendo} />
      )}
      {/* El componente ResizableBox realiza las operaciones de arrastre, rotación y variación de tamaño.
      Debido a que no permite tener contenido anidado, entonces replicamos sus reglas CSS en la capa actual ante cualquier cambio.
       */}
      <ResizableBox
        style={{zIndex: nivel, visibility: seleccionada ? "visible" : "hidden"}}
        className="capa"
        width={capa.width}
        height={capa.height}
        left={capa.left}
        top={capa.top}
        rotationDeg={capa.rotationDeg}
        rotatable={seleccionada}
        onRotate={onRotateHandler}
        draggable={true}
        onClick={() => seleccionarCapa(capa)}
        onDrag={onDragHandler}
        resizable={seleccionada}
        onResize={onResizeHandler}
      />
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
    imprimiendo: PropTypes.bool,
  }),
  pos: PropTypes.number,
  seleccionada: PropTypes.bool,
  imprimiendo: PropTypes.bool
};
