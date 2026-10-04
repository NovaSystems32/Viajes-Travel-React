import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <span>Viajes Travel</span>
        </Link>

        <ul>
          <li><Link to="/sobre-mi">Sobre mí</Link></li>
          <li><Link to="/destinos">Destinos Nacionales</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar