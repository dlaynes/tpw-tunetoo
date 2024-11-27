import PropTypes from "prop-types";
import { ResizableBox } from '@dantecoder/react-resizablebox';
import { useContext } from "react";
import { EditarPoloContext } from "../../../state/editar-polo/EditarPoloContext";

// import { TIPO_CAPA } from "../../../state/editar-polo/constantes";

export const Capa = ({capa, pos}) => {

  const { actualizarCapa } = useContext(EditarPoloContext);

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
    console.log("Rotation", e.style.rotationDeg);
    actualizarCapa({
      id: capa.id,
      rotationDeg: e.style.rotationDeg
    });
  };

  return (
    <div>
      <div className="shadow" style={{
        left: capa.left,
        top: capa.top,
        width: capa.width,
        height: capa.height,
        zIndex: pos,
        transform: 'rotate('+capa.rotationDeg+'deg)'
      }}>{capa.texto}</div>
      <ResizableBox
        key={"resizable-box-"+capa.id}
        style={{zIndex: pos + 100}}
        className="capa"
        width={capa.width}
        height={capa.height}
        left={capa.left}
        top={capa.top}
        rotationDeg={capa.rotationDeg}
        onDrag={onDragHandler}
        onResize={onResizeHandler}
        onRotate={onRotateHandler}
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
    url: PropTypes.string
  }),
  pos: PropTypes.number
};
