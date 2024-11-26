import PropTypes from "prop-types";

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
