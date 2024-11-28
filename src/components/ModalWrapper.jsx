import PropTypes from 'prop-types';

/**
 * El componente ModalWrapper muestra la parte que envuelve a un modal (Popup)
 *
 * Parámetros externos (props)
 * props.visible : booleano que sirve para mostrar o no mostrar el formulario
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón cerrar, sirve para esconder el propio modal
 * props.children: componente que usa el modal
 *
 * @param {*} props
 * @returns
 */
export const ModalWrapper = (props) => {

  const cerrar = () => {
    props.cambiarModal(false);
  };

  return (
    <div className="modal" style={{display: props.visible ? "block" : "none"}}>
      <div className="modal-content" style={props.modalContentStyle}>
        <span className="close" onClick={cerrar}>&times;</span>
        {props.children}
      </div>
    </div>
  )
};

ModalWrapper.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func,
  children: PropTypes.node,
  modalContentStyle: PropTypes.object
}
