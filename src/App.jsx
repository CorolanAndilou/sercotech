import React from 'react'
import Navbar from './components/organisms/Navbar'
import contactos from './pages/contactos.jsx'
import './index.css'

const App = () => {

  const [theme, setTheme] = React.useState('light');
  const [body_theme, setBodyTheme] = React.useState('body-light');

  return (
    <div id="body" className={`${body_theme}`}>
    
      <div className={`${theme}`}>       
        <Navbar theme={theme} setTheme={setTheme} body_theme={body_theme} setBodyTheme={setBodyTheme} />
        <div>
          <h1>10 horas de navbar</h1>        
        </div>
      </div>
    
    </div>
  )
}

export default App
