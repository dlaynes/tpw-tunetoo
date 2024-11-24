import PropTypes from 'prop-types';

window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

export const ModalLogin = (props) => {

  const cerrar = () => {
    props.cambiarModal(false);
  };

  return (
    <div id="loginModal" className="modal" style={{display: props.visible ? "block" : "none"}}>
      <div className="modal-content">
        <span className="close" onClick={cerrar}>&times;</span>
        <form>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
};

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  cambiarModal: PropTypes.func
}
