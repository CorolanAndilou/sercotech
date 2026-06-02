import React from 'react'
import '../../styles/organisms/navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_icon_light from '../../assets/night.png'
import toggle_icon_dark from '../../assets/day.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src='https://sitios.sercotec.cl/centros-de-negocios/wp-content/uploads/sites/4/2021/11/cropped-logo-cdn-2021.png' alt='logo' className='logo'/>
      <ul>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#'>Servicios</a></li>
        <li><a href='#'>Actualidad</a></li>
        <li><a href='#'>Agenda</a></li>
        <li><a href='#'>Contacto</a></li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Buscar'/>
        <img src={search_icon_light} alt=''/>
      </div>

      
      <img src={toggle_icon_light} alt='' className='toggle-icon'/>
      

    </div>
    
  )
}

export default Navbar
