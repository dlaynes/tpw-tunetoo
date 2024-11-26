import PropTypes from 'prop-types';
import { ModalWrapper } from '../../ModalWrapper';

/**
 * El componente ModalMisFotos muestra un seleccionador de imágenes del usuario
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 *
 * @param {*} props
 * @returns
 */
export const ModalMisFotos = (props) => {
  return (
    <ModalWrapper {...props}>
      <form>

        <button type="submit">Cargar</button>
      </form>
    </ModalWrapper>
  )
};

ModalMisFotos.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
