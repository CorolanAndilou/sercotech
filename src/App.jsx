import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/organisms/Navbar'
import contactos from './pages/contactos.jsx'
import './index.css'
import Contactos from './pages/contactos.jsx'

const App = () => {

  const [theme, setTheme] = React.useState('light');
  const [body_theme, setBodyTheme] = React.useState('body-light');

  return (
    <div id="body" className={`${body_theme}`}>
    
      <div className={`${theme}`}>       
        <Navbar theme={theme} setTheme={setTheme} body_theme={body_theme} setBodyTheme={setBodyTheme} />
        <Routes>
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </div>
    
    
    </div>
  )
}

export default App
