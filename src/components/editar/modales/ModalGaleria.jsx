import PropTypes from 'prop-types';
import { NotificationManager } from "react-notifications";

import { ModalWrapper } from '../../ModalWrapper';
import { GALERIA, TIPO_CAPA } from '../../../state/utils/constantes';
import { Categoria } from './Categoria';
import { useContext, useState } from 'react';
import { EditarPoloContext } from '../../../state/editar-polo/EditarPoloContext';
import { crearCapa } from '../../../state/utils/funciones';

/**
 * El componente ModalGaleria permite seleccionar una imagen de la galería (imágenes predefinidas)
 * y agregarla al diseño actual
 *
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 *
 * @param {*} props
 * @returns
 */
export const ModalGaleria = (props) => {

  const [fotoSeleccionada, setFotoSeleccionada] = useState();
  const { agregarCapa, capas } = useContext(EditarPoloContext);

  const agregar = () => {
    if(!fotoSeleccionada) {
      NotificationManager.warning('Seleccione una foto de la galería', 'Hubo un problema', 5000);
      return;
    }

    agregarCapa(crearCapa({
      tipo: TIPO_CAPA.galeria,
      url: "/images/disenador/gallery/"+fotoSeleccionada
    }, capas.length))
    props.cambiarModal(false);
  };

  return (
    <ModalWrapper {...props} modalContentStyle={{maxWidth: 800, width: 800}}>
      <div className='modal-galeria'>
        <h2>Galería de fotos</h2>
        <h4>Seleccione una foto para agregar al diseño</h4>
        <div className='foto-actual'>
          <div className='foto-actual-inner'>
            <span>Foto seleccionada:</span>
            <div>
              {fotoSeleccionada ? <img src={"/images/disenador/gallery/"+fotoSeleccionada} alt="Foto seleccionada"  /> : <span>Ninguna foto</span>}
            </div>
          </div>
          <button type='button' disabled={!fotoSeleccionada} onClick={agregar}>Agregar foto al diseño</button>
        </div>
        <div className='scroll'>
          {GALERIA.map((categoria, i) => <Categoria key={"categoria-"+i} categoria={categoria} pos={i} seleccionar={setFotoSeleccionada} />)}
        </div>
      </div>
    </ModalWrapper>
  )
};

ModalGaleria.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
