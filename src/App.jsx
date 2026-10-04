import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import SobreMi from './pages/SobreMi'
import Contact from './components/Contact'
import Jujuy from './pages/Jujuy'
import Chalten from './pages/Chalten'
import Calafate from './pages/Calafate'
import BuenosAires from './pages/BuenosAires'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/destinos/jujuy" element={<Jujuy />} />
          <Route path="/destinos/chalten" element={<Chalten />} />
          <Route path="/destinos/calafate" element={<Calafate />} />
          <Route path="/destinos/buenos-aires" element={<BuenosAires />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App