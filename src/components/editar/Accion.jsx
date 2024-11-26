import PropTypes from 'prop-types';

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
