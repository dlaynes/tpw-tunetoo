import PropTypes from 'prop-types';
import { NavLink } from "react-router";

import { useLocation } from 'react-router-dom'

/**
 * El componente Cabecera sirve para mostrar el menú de navegación y la imagen banner de la página web
 * Parámetros externos (props)
 * props.cambiarModal : funcion llamada cada vez que hacemos clic en el botón iniciar sesión, sirve para abrir el modal de Login
 *
 * @param {*} props
 * @returns
 */
export const Cabecera = (props) => {

  let location = useLocation();

  const abrirModal = () => {
    props.cambiarModal(true);
  };

  return (
    <header className={"cabecera-" + (location.pathname.indexOf('editar') === -1 ? "regular" : "diseno")}>
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
