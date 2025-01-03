import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CapaActual } from "../components/editar/CapaActual";
import { Capas } from "../components/editar/Capas";
import { Listado } from "../components/editar/listado/Listado";
import { ModalGaleria } from "../components/editar/modales/ModalGaleria";
import { ModalLayer } from "../components/editar/modales/ModalLayer";
import { ModalMisFotos } from "../components/editar/modales/ModalMisFotos";
import { Opciones } from "../components/editar/Opciones";
import { Accion } from "../components/editar/Accion";
import { PolosContext } from "../state/polos/PolosContext";

import "./polos.css";
import { ID_POLO_NUEVO } from "../state/utils/constantes";

/**
 * El componente Polos representa el contenido principal de la página de Creación de un polo
 * Su función principal es listar/agregar los subcomponentes del diseñador de polos, y mostrar o esconder los modales de creación de una capa
 *
 */
export const Polos = () => {
  let params = useParams();
  let navigate = useNavigate();

  const { polos, seleccionarPolo } = useContext(PolosContext);

  /**
   * La página de edición de polos es dibujada cuando se acceden a dos rutas:
   * /editar/
   * /editar/:poloId
   * Donde :poloId corresponde al id de un polo
   * Apenas haya algún cambio en la ruta, entonces cargaremos el polo del usuario
   * si este existe, o un polo predefinido.
   * Si el id es inválido, redigimos a la página de Editar nuevo polo
   *
   * No estoy seguro si se podría presentar un problema con la redirección, al ir agregando rutas
   * más complejas al sistema. En caso fuera necesario detectar la url, se puede realizar
   * mediante el hook useLocation()
   *
   */
  useEffect(() => {
    const id = params.poloId || ID_POLO_NUEVO;
    const polo = polos.find((it) => it.id === id);
    if (polo) {
      seleccionarPolo(polo);
    } else {
      return navigate("/editar");
    }
  }, [params, polos, seleccionarPolo, navigate]);

  // Controles que muestran los popups de creación de capas
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [mostrarNuevaCapa, setMostrarNuevaCapa] = useState(false);
  const [mostrarMisFotos, setMostrarMisFotos] = useState(false);

  return (
    <section className="polos">
      <Capas />
      <div className="capas-aside">
        <Opciones>
          <Accion
            src="/images/disenador/recraft/new-layer.jpg"
            legend="Capa de texto"
            onClick={() => setMostrarNuevaCapa(true)}
          />
          <Accion
            src="/images/disenador/recraft/gallery.jpg"
            legend="Galería"
            onClick={() => setMostrarGaleria(true)}
          />
          <Accion
            src="/images/disenador/recraft/my-photos.jpg"
            legend="Mis fotos"
            onClick={() => setMostrarMisFotos(true)}
          />
        </Opciones>
        <CapaActual />
        <Listado />
      </div>
      <ModalGaleria visible={mostrarGaleria} cambiarModal={setMostrarGaleria} />
      <ModalLayer
        visible={mostrarNuevaCapa}
        cambiarModal={setMostrarNuevaCapa}
      />
      <ModalMisFotos
        visible={mostrarMisFotos}
        cambiarModal={setMostrarMisFotos}
      />
    </section>
  );
};
