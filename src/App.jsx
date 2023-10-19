import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import Header from './Header'
import Container from './Container'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Pricing from './Pricing'
import Support from './Support'
import Features from './Features'
import Enterprize from './Enterprize'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Pricing />} />
          <Route path='support' element={<Support />} />
          <Route path='Features' element={<Features />} />
          <Route path='enterprize' element={<Enterprize />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App