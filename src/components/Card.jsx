import { Link } from 'react-router-dom'

function Card({ titulo, imagen, descripcion, enlace }) {
  return (
    <article className="tarjeta-viaje">
      <img src={imagen} alt={titulo} />

      <div className="tarjeta-contenido">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>

        <Link to={enlace}>Ver destino</Link>
      </div>
    </article>
  )
}

export default Card