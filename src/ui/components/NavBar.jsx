import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
     <div className='container'>
            <img src="./assets/Log-Merc-Libre.png" alt="logo" />
            <ul>
        {/* <div className='list'> */}
            <NavLink to={'/'} className={'listItem'}>
                Home
            </NavLink>
            <NavLink to={'/contac'} className={'listItem'}>
                Contactos
            </NavLink>
            <NavLink to={'/about'} className={'listItem'}>
                Nosotros
            </NavLink>
            </ul>
        {/* </div> */}
     </div>
    </nav>
  )
}
