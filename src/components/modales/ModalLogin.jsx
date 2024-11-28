import PropTypes from 'prop-types';
import { ModalWrapper } from '../ModalWrapper';

/**
 * El componente ModalLogin muestra el formulario de inicio de sesión
 *
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 *
 * @param {*} props
 * @returns
 */
export const ModalLogin = (props) => {
  return (
    <ModalWrapper {...props}>
      <form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Iniciar sesión</button>
      </form>
    </ModalWrapper>
  )
};

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
