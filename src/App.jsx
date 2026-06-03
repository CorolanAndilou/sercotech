import React from 'react'
import Navbar from './components/organisms/Navbar'
import './index.css'

const App = () => {

  const [theme, setTheme] = React.useState('light');

  return (
    <div id={`${theme}`}>
            
      <Navbar theme={theme} setTheme={setTheme} />
        <div>
          <h1>10 horas de navbar</h1>                
      </div>
    </div>
  )
}

export default App
