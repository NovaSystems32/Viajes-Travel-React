import Card from '../components/Card'
import Gallery from '../components/Gallery'


function Destinos() {
  return (
    <section className="destinos">
      <div className="titulo-destinos">
        <h1>Destinos nacionales</h1>
        <p>
          Descubrí lugares increíbles de Argentina
          y elegí tu próxima aventura.
        </p>
      </div>

      <div className="contenedor-tarjetas">
        <Card
          titulo="Jujuy"
          enlace="/destinos/jujuy"
          imagen="/img/jujuy.jpg"
          descripcion="Descubrí sus cerros, quebradas, cultura y arquitectura colonial en un viaje inolvidable."
        />

        <Card
          titulo="El Chaltén"
          enlace="/destinos/chalten"
          imagen="/img/chalten.jpg"
          descripcion="Disfrutá de senderos, montañas y paisajes naturales en el corazón de la Patagonia."
        />

        <Card
          titulo="El Calafate"
          enlace="/destinos/calafate"
          imagen="/img/calafate.jpg"
          descripcion="Conocé el glaciar Perito Moreno y los increíbles paisajes de la Patagonia argentina."
        />

        <Card
          titulo="Buenos Aires"
          enlace="/destinos/buenos-aires"
          imagen="/img/buenosaires.jpg"
          descripcion="Recorré sus barrios, disfrutá su gastronomía, arquitectura, espectáculos y vida cultural."
        />
      </div>
            <div className="titulo-destinos">
        <h2>Inspiración para tu próximo viaje</h2>
      </div>

      <Gallery />
    </section>
  )
}

export default Destinos