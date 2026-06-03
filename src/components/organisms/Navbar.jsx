import React from 'react'
import { Link } from 'react-router-dom'
import Contactos from '../../pages/contactos.jsx'
import '../../styles/organisms/navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_icon_light from '../../assets/night.png'
import toggle_icon_dark from '../../assets/day.png'


const Navbar = ({ theme, setTheme, body_theme, setBodyTheme }) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    body_theme === 'body-light' ? setBodyTheme('body-dark') : setBodyTheme('body-light');
  };

  return (
    <div className='navbar'>
      <img src='https://sitios.sercotec.cl/centros-de-negocios/wp-content/uploads/sites/4/2021/11/cropped-logo-cdn-2021.png' alt='logo' className='logo'/>

      <ul>
        <li><Link to="/Home">Inicio</Link></li>
        <li>Servicios</li>
        <li>Actualidad</li>
        <li>Agenda</li>
        <li><Link to="/contactos">Contacto</Link></li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Buscar'/>
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt=''/>
      </div>

      
      <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toggle_icon_light : toggle_icon_dark} alt='' className='toggle-icon'/>
      

    </div>
    
  )
}

export default Navbar
