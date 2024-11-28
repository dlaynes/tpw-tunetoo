import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ReactImagePickerEditor from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'

import { TIPO_CAPA } from '../../../state/utils/constantes';
import { ModalWrapper } from '../../ModalWrapper';
import { EditarPoloContext } from '../../../state/editar-polo/EditarPoloContext';
import { crearCapa } from '../../../state/utils/funciones';

const config = {
  borderRadius: '8px',
  language: 'es',
  width: '330px',
  height: '250px',
  objectFit: 'contain',
  compressInitial: 80,
  darkMode: false,
  hideAddBtn: true,
  hideDownloadBtn: true,
  rtl: false
};

/**
 * El componente ModalMisFotos muestra un seleccionador de imágenes del usuario
 * para agregar la imagen seleccionada al diseño actual
 *
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 *
 * @param {*} props
 * @returns
 */
export const ModalMisFotos = (props) => {
  const [image, setImage] = useState('');
  const { agregarCapa, capas } = useContext(EditarPoloContext);

  const agregar = () => {
    if(!image) {
      alert("Seleccione una foto");
      return;
    }
    agregarCapa(crearCapa({
      tipo: TIPO_CAPA.imagen,
      url: image
    }, capas.length))
    props.cambiarModal(false);
  };

  return (
    <ModalWrapper {...props}>
      <div className='modal-galeria'>
        <h2>Mis fotos</h2>
        <h4>Carge una foto para agregar al diseño</h4>
        <p>Formatos válidos: jpg, png, gif, webp</p>

        < ReactImagePickerEditor
            config={config}
            imageSrcProp={''}

            imageChanged={(newDataUri) => { setImage(newDataUri) }} />
        <br />
        <div>
          <button type='button' disabled={!image} onClick={agregar}>Agregar foto al diseño</button>
        </div>
      </div>
    </ModalWrapper>
  )
};

ModalMisFotos.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
