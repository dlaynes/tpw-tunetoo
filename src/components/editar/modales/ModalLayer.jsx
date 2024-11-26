import PropTypes from 'prop-types';
import { ModalWrapper } from '../../ModalWrapper';

/**
 * El componente ModalLayer permite generar una capa de texto
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 *
 * @param {*} props
 * @returns
 */
export const ModalLayer = (props) => {
  return (
    <ModalWrapper {...props}>
      <form>

        <button type="submit">Cargar</button>
      </form>
    </ModalWrapper>
  )
};

ModalLayer.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
