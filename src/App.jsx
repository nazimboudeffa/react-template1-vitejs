import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
