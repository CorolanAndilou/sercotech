import React from 'react'
import Navbar from './components/organisms/Navbar'
import './index.css'

const App = () => {

  const [theme, setTheme] = React.useState('light');

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className='container'>
        
      </div>

    </div>
  )
}

export default App
