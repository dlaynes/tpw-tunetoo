import PropTypes from "prop-types";

/**
 * El componente Opciones muestra el listado de opciones (botones) para crear capas nuevas
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
