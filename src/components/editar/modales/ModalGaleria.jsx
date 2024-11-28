import PropTypes from 'prop-types';
import { ModalWrapper } from '../../ModalWrapper';

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
  return (
    <ModalWrapper {...props}>
      <form>

        <button type="submit">Cargar</button>
      </form>
    </ModalWrapper>
  )
};

ModalGaleria.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
