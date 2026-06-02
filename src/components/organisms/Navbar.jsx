import React from 'react'
import '../../styles/organisms/navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_icon_light from '../../assets/night.png'
import toggle_icon_dark from '../../assets/day.png'





const Navbar = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <img src='https://sitios.sercotec.cl/centros-de-negocios/wp-content/uploads/sites/4/2021/11/cropped-logo-cdn-2021.png' alt='logo' className='logo'/>

      <ul>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Actualidad</li>
        <li>Agenda</li>
        <li>Contacto</li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Buscar'/>
        <img src={search_icon_light} alt=''/>
      </div>

      
      <img onClick={()=>{toggle_mode()}} src={toggle_icon_light} alt='' className='toggle-icon'/>
      

    </div>
    
  )
}

export default Navbar
