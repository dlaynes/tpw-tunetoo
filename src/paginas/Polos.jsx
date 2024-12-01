import { useState } from 'react';

import { CapaActual } from "../components/editar/CapaActual";
import { Capas } from "../components/editar/Capas";
import { Listado } from "../components/editar/listado/Listado";
import { ModalGaleria } from "../components/editar/modales/ModalGaleria";
import { ModalLayer } from "../components/editar/modales/ModalLayer";
import { ModalMisFotos } from "../components/editar/modales/ModalMisFotos";
import { Opciones } from "../components/editar/Opciones";
import { Accion } from "../components/editar/Accion";

import "./polos.css";

/**
 * El componente Polos representa el contenido principal de la página de Creación de un polo
 * Su función principal es crear los subcomponentes del diseñador de polos, y mostrar o esconder los modales de creación de una capa
 *
 */
export const Polos = () => {

  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [mostrarNuevaCapa, setMostrarNuevaCapa] = useState(false);
  const [mostrarMisFotos, setMostrarMisFotos] = useState(false);

  return (
    <section className="polos">
      <Capas />
      <div className="capas-aside">
        <Opciones>
          <Accion src="/images/disenador/recraft/new-layer.jpg" legend="Capa de texto" onClick={()=>setMostrarNuevaCapa(true)} />
          <Accion src="/images/disenador/recraft/gallery.jpg" legend="Galería" onClick={()=>setMostrarGaleria(true)} />
          <Accion src="/images/disenador/recraft/my-photos.jpg" legend="Mis fotos" onClick={()=>setMostrarMisFotos(true)} />
        </Opciones>
        <CapaActual />
        <Listado />
      </div>
      <ModalGaleria visible={mostrarGaleria} cambiarModal={setMostrarGaleria} />
      <ModalLayer visible={mostrarNuevaCapa} cambiarModal={setMostrarNuevaCapa} />
      <ModalMisFotos visible={mostrarMisFotos} cambiarModal={setMostrarMisFotos} />
    </section>
  );
};
