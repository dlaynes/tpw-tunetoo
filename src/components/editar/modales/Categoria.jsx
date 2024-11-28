import PropTypes from "prop-types";

/**
 * El componente Categoría representa cada una de los tipos de imágenes predefinidas
 * para agregar al diseño. Aparece en el modal de Galería
 *
 *
 * @param {} param0
 * @returns
 */

export const Categoria = ({ categoria, pos, seleccionar }) => {
  return (
    <div className="categoria">
      <h4>{categoria.nombre}</h4>
      <div className="imagenes">
        {categoria.fotos?.map((foto, i) => (
          <div key={"foto-" + pos + "-" + i} className="foto">
            <img src={"/images/disenador/gallery/"+categoria.carpeta+"/"+foto} alt={"Foto " + pos + " " + i} onClick={() => seleccionar(categoria.carpeta+"/"+foto)} />
          </div>
        ))}
      </div>
    </div>
  );
};

Categoria.propTypes = {
  pos: PropTypes.number,
  seleccionar: PropTypes.func,
  categoria: PropTypes.shape({
    nombre: PropTypes.string,
    carpeta: PropTypes.string,
    fotos: PropTypes.arrayOf(PropTypes.string),
  }),
};
