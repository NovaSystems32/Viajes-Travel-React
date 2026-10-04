import { Link } from 'react-router-dom'

function Jujuy() {
  return (
    <section className="detalle-destino">
      <div className="encabezado-destino">
        <Link to="/destinos" className="volver-destinos">
          Volver a destinos
        </Link>

        <h1>Jujuy</h1>
        <p>
          Naturaleza, cultura y paisajes inolvidables
          en el norte argentino.
        </p>
      </div>

      <div className="galeria-detalle">
        <img
          className="foto-destacada"
          src="/img/jujuy1.jpg"
          alt="Paisaje de Jujuy"
        />
        <img src="/img/jujuy2.jpg" alt="Cultura de Jujuy" />
        <img src="/img/jujuy3.jpg" alt="Ruta de Jujuy" />
      </div>

      <div className="descripcion-destino">
        <div className="texto-destino">
          <h2>Conocé Jujuy</h2>

          <p>
            Jujuy es uno de los destinos más atractivos del norte
            argentino. Se destaca por sus paisajes, sus cerros de
            colores y su arquitectura colonial.
          </p>

          <p>
            Durante el viaje podés conocer la ciudad de San Salvador
            de Jujuy, Tilcara, Maimará, Purmamarca y la Quebrada
            de las Señoritas.
          </p>

          <p>
            Es un destino ideal para quienes buscan naturaleza,
            cultura, historia y experiencias diferentes.
          </p>
        </div>

        <aside className="informacion-destino">
          <h3>Información del destino</h3>
          <p>Jujuy, Argentina</p>
          <p>Recomendado todo el año</p>
          <p>Naturaleza y cultura</p>

          <Link to="/contacto">Consultar este viaje</Link>
        </aside>
      </div>
    </section>
  )
}

export default Jujuy