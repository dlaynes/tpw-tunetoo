import PropTypes from "prop-types";

/**
 * El componente Opciones muestra el listado de opciones (botones) para crear capas nuevas.
 * En un proyecto avanzado, en nuestra opinión es mejor reemplazarlo por un componente de la librería styled
 *
 * Parámetros externos (props)
 * props.children Los botones que sirven para crear una capa según su tipo
 *
 * @param {*} props
 * @returns
 */

export const Opciones = (props) => {
  return (
    <div className="opciones-container">
      {props.children}
    </div>
  );
};

Opciones.propTypes = {
  children: PropTypes.node
};
