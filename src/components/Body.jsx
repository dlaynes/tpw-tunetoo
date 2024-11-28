import { useState } from 'react';
import PropTypes from 'prop-types';
import { Cabecera } from './Cabecera';
import { ModalLogin } from './modales/ModalLogin';
import { PiePagina } from './PiePagina';

/**
 * El componente Body sirve para indicar una sola vez la declaración de los elementos comunes a todas las páginas
 * del proyecto, como son, la cabecera de navegación o el pie de página.
 * Sin embargo, generalmente en los portales web, los componentes repetitivos varían de sección a sección,
 * por lo que en esos casos especiales, los desarrolladores usan plantillas específicas a cada sección.
 * El componente Body también incluye la funcionalidad para mostrar el modal de Login (esto mediante el manejo de la variable booleana modalLogin)
 *
 * Parámetros externos (props)
 * props.children: la página actual a la que ha navegado el usuario
 *
 * @param {*} props
 * @returns
 */
export const Body = (props) => {

  const [modalLogin, setModalLogin] = useState(false);

  return (
    <>
      <Cabecera cambiarModal={setModalLogin} />
      <main>
        {props.children}
      </main>
      <PiePagina />
      <ModalLogin visible={modalLogin} cambiarModal={setModalLogin} />
    </>
  );

};

Body.propTypes = {
  children: PropTypes.node
};
