import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cine from './pages/Cine'
import Tv from './pages/Tv'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import Peliculas from './pages/Peliculas'
import DetalleCine from './pages/DetalleCine'

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      {/* El Navbar está FUERA de las rutas, por lo que SIEMPRE se ve */}
      <Header />

      {/* El área dinámica: Solo se renderiza un componente a la vez según la URL */}
      <div className="min-h-screen bg-gray-950 text-white">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cine" element={<Cine />} />
          <Route path="/tv/:id/:name" element={<Tv />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/peliculas/:id/:name" element={<Peliculas />} />
          <Route path="/detalle-cine/:id" element={<DetalleCine />} />
        </Routes>
      </div>

      {/* El Footer también está FUERA de las rutas, SIEMPRE se ve */}
      <Footer />

    </BrowserRouter>
  )
}

export default App