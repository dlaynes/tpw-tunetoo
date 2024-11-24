import { useState } from 'react';
import PropTypes from 'prop-types';
import { Cabecera } from './Cabecera';
import { ModalLogin } from './modales/ModalLogin';
import { PiePagina } from './PiePagina';

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
