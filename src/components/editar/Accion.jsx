import PropTypes from 'prop-types';

/**
 * El componente Accion representa a uno de los botones que se usan para agregar capas al diseño.
 *
 * props.src Imagen del botón
 * props.onClick Función que es llamada al realizar click
 * props.legend Descripción de la función del botón
 *
 * @param {*} param0
 * @returns
 */

export const Accion = ({src, onClick, legend}) => {
    return (
        <div className="accion">
            <button onClick={onClick}>
                {!!src && <img src={src} alt={legend} />}
            </button>
            <span>{legend}</span>
        </div>
    )
}

Accion.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func,
    legend: PropTypes.string
};
