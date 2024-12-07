/**
 * El componente Equipo representa el contenido principal de la página EQUIPO
 */
export const Equipo = () => {
  return (
    <section className="org-chart">
      <div className="level">
        <div className="member">
          <img src="/images/mn-icon.jpg" alt="CEO" />
          <h2>CEO</h2>
          <p>Juan Pérez</p>
        </div>
      </div>
      <div className="level">
        <div className="member">
        <img src="/images/wmn-icon.jpg" alt="CTO" />
          <h2>CTO</h2>
          <p>María García</p>
        </div>
        <div className="member">
          <img src="/images/mn-icon.jpg" alt="COO" />
          <h2>COO</h2>
          <p>Carlos López</p>
        </div>
      </div>
      <div className="level">
        <div className="member">
          <img src="/images/wmn-icon.jpg" alt="Desarrollador" />
          <h2>Desarrollador</h2>
          <p>Ana Martínez</p>
        </div>
        <div className="member">
          <img src="/images/mn-icon.jpg" alt="Diseñador" />
          <h2>Diseñador</h2>
          <p>Pedro Rodríguez</p>
        </div>
        <div className="member">
          <img src="/images/wmn-icon.jpg" alt="Marketing" />
          <h2>Marketing</h2>
          <p>Lucía Fernández</p>
        </div>
      </div>
    </section>
  )
};
