import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apartments from './pages/Apartments'
import ApartmentDetail from './pages/ApartmentDetail'
import Confirmation from './pages/Confirmation'
import Policy from './pages/Policy'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/apartments/:slug" element={<ApartmentDetail />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/policy/:slug" element={<Policy />} />
      </Routes>
    </Router>
  )
}

export default App

