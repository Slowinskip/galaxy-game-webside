import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import About from './components/views/About/About'
import Home from './components/views/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
