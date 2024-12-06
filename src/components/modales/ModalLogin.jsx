import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from '../ModalWrapper';
import { Login } from './Auth/Login';
import { Registro } from './Auth/Registro';
import { AutenticacionContext } from '../../state/autenticacion/AutenticacionContext';

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
  const [isLogin, setIsLogin] = useState(true);
  const { usuario, error } = useContext(AutenticacionContext);

  // En caso se logre iniciar sesión a traves de alguno de los formularios, cerramos el modal
  if(usuario){
    props.cambiarModal(false);
    return null;
  }

  return (
    <ModalWrapper {...props}>
      {error && <div style={{color: "red"}}>{error.message || "Hubo un problema al enviar los datos"}</div>}
      {isLogin && <Login formRegistro={() => setIsLogin(false)} />}
      {!isLogin && <Registro formLogin={() => setIsLogin(true)} />}
    </ModalWrapper>
  )
};

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
