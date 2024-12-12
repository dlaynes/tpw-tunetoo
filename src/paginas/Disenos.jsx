import { Link } from "react-router";
import { ID_POLO_NUEVO } from "../state/utils/constantes";
import { useContext } from "react";
import { PolosContext } from "../state/polos/PolosContext";
import { Capa } from "../components/editar/principal/Capa";

export const Disenos = () => {

  const { polos } = useContext(PolosContext);

  const polosGuardados = polos.filter(it => it.id !== ID_POLO_NUEVO);

  return (
    <section className="disenos">
      <h3>Mis diseños</h3>

      {
        !polosGuardados.length &&
        <p style={{marginBottom: 100}}>No tiene diseños guardados</p>
      }
      {!!polosGuardados.length && <div className="level">
        {polosGuardados.map((it,i) => <div className="diseno-single" key={"polo-guardado-"+i}>
          <div className="capas-inner-mini">
            <div className="capas-limits">
            {it.capas.map(capa => (
              <Capa
                key={"listado-capa-" + it.id+"_ " + capa.id}
                actualizarCapa={() => {}}
                capa={capa}
                pos={i}
                disenador={false}
              />
            ))}
            </div>
          </div>
          <p>{it.titulo || 'Sin título'}</p>
          <p><span title="Última actualización">{(new Date(it.ultimaActualizacion)).toLocaleString()}</span></p>
          <Link to={"/editar/"+it.id}>Editar</Link>
        </div>)}
      </div>}

      <Link className="action-button" to="/editar" viewTransition>
        Crear un nuevo diseño
      </Link>

    </section>
  );
};
