import { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router";

import { useLocation } from "react-router-dom";
import { AutenticacionContext } from "../state/autenticacion/AutenticacionContext";

/**
 * El componente Cabecera sirve para mostrar el menú de navegación y la imagen banner de la página web
 *
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

  const { usuario, salir } = useContext(AutenticacionContext);

  const cerrarSesion = async () => {
    await salir();
  };

  return (
    <header
      className={
        "cabecera-" +
        (location.pathname.indexOf("editar") === -1 ? "regular" : "diseno")
      }
    >
      <nav>
        <div className="logo">
          <h1>Tunetoo</h1>
          <p>Comparte el mundo</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              viewTransition
            >
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crear"
              className={({ isActive }) => (isActive ? "active" : "")}
              viewTransition
            >
              CREAR <span>todos tus deseos</span>
            </NavLink>
          </li>
          {!!usuario && <li>
            <NavLink
              to="/disenos"
              className={({ isActive }) => (isActive ? "active" : "")}
              viewTransition
            >
              PORTAFOLIO <span>mis diseños</span>
            </NavLink>
          </li>}
          <li>
            <NavLink
              to="/artshop"
              className={({ isActive }) => (isActive ? "active" : "")}
              viewTransition
            >
              ART SHOP <span>ideas de regalo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) => (isActive ? "active" : "")}
              viewTransition
            >
              NOSOTROS <span>nuestra empresa</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/equipo"
              className={({ isActive }) => (isActive ? "active" : "")}
              viewTransition
            >
              STAFF <span>Equipo de trabajo</span>
            </NavLink>
          </li>
        </ul>
        <div className="acciones">
          {!!usuario && (
            <div className="sesion">
              Bienvenido de vuelta!
              <br />
              <strong>{usuario.email}</strong>
              <br />
              <a href="#" style={{color: 'red'}} onClick={cerrarSesion}>
                Cerrar sesión
              </a>
            </div>
          )}
          {!usuario && (
            <div className="sesion">
              <a href="#" id="loginBtn" onClick={abrirModal}>
                Iniciar sesión
              </a>
              {/*<a href="#" className="carrito">
              <span className="contador">0</span>
            </a>*/}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

Cabecera.propTypes = {
  cambiarModal: PropTypes.func,
};

// Nota:
// Importamos la librería PropTypes, para generar advertencias cuando se estén pasando parámetros incorrectos a un componente.
// En un entorno Typescript en vez de eso, se suelen usar declaración de tipos o clases, para restringir los valores posibles
// de los parámetros. En un proyecto vite-React, estas advertencias suelen aparecer mientras se edita el código fuente
