export const Index = () => {
  return (
    <section className="productos">
      <h2>ROPA Y OBJETOS PERSONALIZADOS EN IMPRESIÓN Y BORDADO</h2>

      <div className="galeria">
        <div className="producto">
          <a href="images/polos.avif" target="_blank">
            <img src="images/polos.avif" alt="Camiseta personalizada" />
            <button>Camisetas personalizadas</button>
          </a>
        </div>
        <div className="producto">
          <a href="images/gorra.avif" target="_blank">
            <img src="images/gorra.avif" alt="Gorra personalizada" />
            <button>Gorras personalizadas</button>
          </a>
        </div>

        <div className="producto">
          <a href="images/chullo.avif" target="_blank">
            <img src="images/chullo.avif" alt="Almohada personalizada" />
            <button>Chullos personalizadas</button>
          </a>
        </div>
        <div className="producto">
          <a href="images/baby.avif" target="_blank">
            <img src="images/baby.avif" alt="Body para bebé personalizado" />
            <button>Bodys personalizados</button>
          </a>
        </div>
      </div>
    </section>
  )
};
