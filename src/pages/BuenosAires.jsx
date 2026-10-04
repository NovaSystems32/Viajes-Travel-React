import { Link } from 'react-router-dom'

function BuenosAires() {
  return (
    <section className="detalle-destino">
      <div className="encabezado-destino">
        <Link to="/destinos" className="volver-destinos">
          Volver a destinos
        </Link>

        <h1>Buenos Aires</h1>
        <p>
          Cultura, gastronomía y vida urbana
          en la capital argentina.
        </p>
      </div>

      <div className="galeria-detalle">
        <img
          className="foto-destacada"
          src="/img/buenosaires1.jpg"
          alt="Teatro en Buenos Aires"
        />
        <img
          src="/img/buenosaires2.jpg"
          alt="Vista de Buenos Aires"
        />
        <img
          src="/img/buenosaires3.jpg"
          alt="Paisaje urbano de Buenos Aires"
        />
      </div>

      <div className="descripcion-destino">
        <div className="texto-destino">
          <h2>Conocé Buenos Aires</h2>

          <p>
            Buenos Aires es una ciudad llena de historia,
            cultura, espectáculos y una gran variedad
            de propuestas gastronómicas.
          </p>

          <p>
            Podés visitar lugares como el Obelisco, Caminito,
            Puerto Madero, Plaza de Mayo, San Telmo y los
            parques del barrio de Palermo.
          </p>

          <p>
            Es un destino ideal para recorrer museos, teatros,
            restaurantes, parques y barrios tradicionales.
          </p>
        </div>

        <aside className="informacion-destino">
          <h3>Información del destino</h3>
          <p>Buenos Aires, Argentina</p>
          <p>Recomendado todo el año</p>
          <p>Cultura y vida urbana</p>

          <Link to="/contacto">Consultar este viaje</Link>
        </aside>
      </div>
    </section>
  )
}

export default BuenosAires