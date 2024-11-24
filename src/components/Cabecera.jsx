import PropTypes from 'prop-types';
import { NavLink } from "react-router";

export const Cabecera = (props) => {

  const abrirModal = () => {
    props.cambiarModal(true);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Tunetoo</h1>
          <p>Comparte el mundo</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crear"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              CREAR <span>todos tus deseos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artshop"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              ART SHOP <span>ideas de regalo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              NOSOTROS <span>nuestra empresa</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/equipo"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              EQUIPO DE TRABAJO <span>Staff</span>
            </NavLink>
          </li>
        </ul>
        <div className="acciones">
            <div className="sesion">
                <a href="#" id="loginBtn" onClick={abrirModal}>Iniciar sesión</a>
                <a href="#" className="carrito">
                    <span className="contador">0</span>
                </a>
            </div>
        </div>
      </nav>
    </header>
  );
};

Cabecera.propTypes = {
  cambiarModal: PropTypes.func
};
