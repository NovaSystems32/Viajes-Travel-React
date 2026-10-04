import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="portada">
      <img
        src="/img/Fitz Roy1.jpg"
        alt="Paisaje del Fitz Roy"
      />

      <div className="portada-texto">
        <h1>Tu próxima aventura comienza aquí</h1>

        <p>
          Descubrí paisajes increíbles y encontrá el destino
          ideal para tu próximo viaje.
        </p>

        <Link to="/destinos" className="boton-portada">
          Ver destinos
        </Link>
      </div>
    </section>
  )
}

export default Home