export const Index = () => {
  return (
    <section className="productos">
      <h2>ROPA Y OBJETOS PERSONALIZADOS EN IMPRESIÓN Y BORDADO</h2>

      <div className="galeria">
        <div className="producto">
          <a href="camisetas/ventaDeCamisetas.html" target="_blank">
            <img src="images/polos.avif" alt="Camiseta personalizada" />
            <button>Camisetas personalizadas</button>
          </a>
        </div>
        <div className="producto">
          <a href="gorras/ventaDeGorras.html" target="_blank">
            <img src="images/gorra.avif" alt="Gorra personalizada" />
            <button>Gorras personalizadas</button>
          </a>
        </div>

        <div className="producto">
          <a href="chullos/ventaDeChullos.html" target="_blank">
            <img src="images/chullo.avif" alt="Almohada personalizada" />
            <button>Chullos personalizadas</button>
          </a>
        </div>
        <div className="producto">
          <a href="bodys/ventaDeBodys.html" target="_blank">
            <img src="images/baby.avif" alt="Body para bebé personalizado" />
            <button>Bodys personalizados</button>
          </a>
        </div>
      </div>
    </section>
  )
};
