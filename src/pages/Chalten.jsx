import { Link } from 'react-router-dom'

function Chalten() {
  return (
    <section className="detalle-destino">
      <div className="encabezado-destino">
        <Link to="/destinos" className="volver-destinos">
          Volver a destinos
        </Link>

        <h1>El Chaltén</h1>
        <p>
          Montañas, senderos y naturaleza en el corazón
          de la Patagonia argentina.
        </p>
      </div>

      <div className="galeria-detalle">
        <img
          className="foto-destacada"
          src="/img/chalten2.jpg"
          alt="Paisaje de El Chaltén"
        />
        <img src="/img/chalten3.jpg" alt="Senderos de El Chaltén" />
        <img src="/img/chalten4.jpg" alt="Montañas de El Chaltén" />
      </div>

      <div className="descripcion-destino">
        <div className="texto-destino">
          <h2>Conocé El Chaltén</h2>

          <p>
            El Chaltén es una pequeña localidad ubicada en la
            provincia de Santa Cruz. Es conocida como la capital
            argentina del senderismo.
          </p>

          <p>
            Desde allí se pueden recorrer numerosos senderos
            rodeados de montañas, lagos, bosques y glaciares.
            Uno de sus paisajes más reconocidos es el cerro Fitz Roy.
          </p>

          <p>
            Es un destino ideal para quienes disfrutan de las
            caminatas, la fotografía y el contacto con la naturaleza.
          </p>
        </div>

        <aside className="informacion-destino">
          <h3>Información del destino</h3>
          <p>Santa Cruz, Argentina</p>
          <p>Recomendado de octubre a abril</p>
          <p>Montaña y senderismo</p>

          <Link to="/contacto">Consultar este viaje</Link>
        </aside>
      </div>
    </section>
  )
}

export default Chalten