import PropTypes from "prop-types";

/**
 * El componente Opciones sirve para contener el listado de opciones (botones) que crean capas nuevas.
 *
 * Parámetros externos (props)
 * props.children Los botones que sirven para crear una capa según su tipo
 *
 * @param {*} props
 * @returns
 */

export const Opciones = (props) => {
  return (
    <div>
      <h3>Agrega elementos al diseño:</h3>
      <div className="opciones-container">
        {props.children}
      </div>
    </div>
  );
};

Opciones.propTypes = {
  children: PropTypes.node
};
