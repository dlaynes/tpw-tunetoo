import { useContext, useState } from "react";

import PropTypes from "prop-types";
import { ModalWrapper } from "../../ModalWrapper";
import { CAPA_BASE, TIPO_CAPA } from "../../../state/utils/constantes";
import { EditarPoloContext } from "../../../state/editar-polo/EditarPoloContext";

/**
 * El componente ModalLayer permite generar una capa de texto, y agregarla al diseño actual
 *
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 *
 * @param {*} props
 * @returns
 */
export const ModalLayer = (props) => {
  const [capa, setCapa] = useState(() => Object.assign({}, CAPA_BASE, {tipo: TIPO_CAPA.texto}));
  const [transparente, setTransparente] = useState(false);
  const { agregarCapa, capas } = useContext(EditarPoloContext);

  const setProperty = (campo, valor) => {
    setCapa({
      ...capa,
      [campo]: valor,
    });
  };

  const agregar = () => {
    const c = {...capa, backgroundColor: transparente ? "transparent" : capa.backgroundColor};
    agregarCapa(c, capas.length);
    props.cambiarModal(false);
  };

  return (
    <ModalWrapper {...props}>
      <div className="modal-texto">
        <h2>Nueva capa</h2>
        <h4>Agregue una nueva capa personalizada</h4>
        <br />
        <div className="form-layer">
          <div className="form-preview">
            <div style={{
              textAlign: capa.textAlign,
              fontSize: capa.fontSize+"px",
              color: capa.color,
              backgroundColor: transparente ? "transparent" : capa.backgroundColor,
              fontFamily: capa.fontFamily
            }}>
              {capa.texto}
            </div>
          </div>
          <div className="form-layer-contents">
            <div>
              <label htmlFor="texto">1. Texto de la capa</label>
              <br />
              <input
                type="text"
                placeholder="No se ha seleccionado un texto"
                name="texto"
                id="texto"
                value={capa.texto}
                onChange={(event) => setProperty("texto", event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="color">2. Color del texto</label>
              <br />
              <input
                type="color"
                name="color"
                id="color"
                value={capa.color}
                onChange={(event) => setProperty("color", event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="color">3. Color del fondo</label>
              <br />
              <input
                disabled={transparente}
                type="color"
                name="backgroundColor"
                id="backgroundColor"
                value={capa.backgroundColor}
                onChange={(event) =>
                  setProperty("backgroundColor", event.target.value)
                }
              />
              <br />
              <input
                type="checkbox"
                checked={transparente}
                onChange={() => setTransparente(tr => !tr)}
              />{" "}
              Usar fondo transparente
            </div>
            <div>
              <label htmlFor="fontSize">4. Tamaño de la fuente</label>
              <br />
              <input
                type="number"
                name="fontSize"
                id="fontSize"
                value={capa.fontSize}
                min={8}
                max={64}
                onChange={(event) =>
                  setProperty("fontSize", event.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="textAlign">5. Alineación del texto</label>
              <br />
              <select
                value={capa.textAlign}
                onChange={(event) =>
                  setProperty("textAlign", event.target.value)
                }
              >
                <option value="center">Centro</option>
                <option value="left">Izquierda</option>
                <option value="right">Derecha</option>
              </select>
            </div>
            <p>
              <label htmlFor="textAlign">6. Fuente</label>
              <br />
              <select
                value={capa.fontFamily}
                onChange={(event) =>
                  setProperty("fontFamily", event.target.value)
                }
              >
                <option value="Arial" style={{fontFamily: 'Arial'}}>Arial</option>
                <option value="Sans-serif" style={{fontFamily: 'Sans-serif'}}>Sans-serif</option>
                <option value="Console" style={{fontFamily: 'Console'}}>Console</option>
              </select>
            </p>
          </div>
        </div>

        <br />
        <div>
          <button type="button" onClick={agregar}>
            Agregar capa
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

ModalLayer.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func,
};
