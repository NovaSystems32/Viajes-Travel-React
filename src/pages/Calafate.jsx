import { Link } from 'react-router-dom'

function Calafate() {
  return (
    <section className="detalle-destino">
      <div className="encabezado-destino">
        <Link to="/destinos" className="volver-destinos">
          Volver a destinos
        </Link>

        <h1>El Calafate</h1>
        <p>
          Glaciares, lagos y paisajes únicos
          en la Patagonia argentina.
        </p>
      </div>

      <div className="galeria-detalle">
        <img
          className="foto-destacada"
          src="/img/calafate1.jpg"
          alt="Glaciares de El Calafate"
        />
        <img src="/img/calafate2.jpg" alt="Paisaje de El Calafate" />
        <img src="/img/calafate3.jpg" alt="Lago y montañas de El Calafate" />
      </div>

      <div className="descripcion-destino">
        <div className="texto-destino">
          <h2>Conocé El Calafate</h2>

          <p>
            El Calafate se encuentra en la provincia de Santa Cruz
            y es uno de los destinos más visitados de la Patagonia
            argentina.
          </p>

          <p>
            Su principal atractivo es el glaciar Perito Moreno,
            ubicado dentro del Parque Nacional Los Glaciares.
            También se pueden realizar navegaciones, caminatas
            y diferentes excursiones.
          </p>

          <p>
            Es un destino ideal para quienes desean conocer
            enormes glaciares, lagos y paisajes naturales inolvidables.
          </p>
        </div>

        <aside className="informacion-destino">
          <h3>Información del destino</h3>
          <p>Santa Cruz, Argentina</p>
          <p>Recomendado de septiembre a abril</p>
          <p>Glaciares y naturaleza</p>

          <Link to="/contacto">Consultar este viaje</Link>
        </aside>
      </div>
    </section>
  )
}

export default Calafate