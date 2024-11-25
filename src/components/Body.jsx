import { useState } from 'react';
import PropTypes from 'prop-types';
import { Cabecera } from './Cabecera';
import { ModalLogin } from './modales/ModalLogin';
import { PiePagina } from './PiePagina';

/**
 * El componente Body sirve para mostrar los elementos comunes a todas las páginas del proyecto,
 * como son la cabecera de navegación o el pie de página
 * También incluye funcionalidad para mostrar el modal de Login (mediante el manejo del booleano modalLogin)
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
