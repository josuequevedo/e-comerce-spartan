import React from 'react'
import { RouteApp } from './routes/RouteApp'
import { NavBar } from './ui/components/NavBar'

export const AppEcomerce = () => {
  return (
    <> 
      <header>
          <NavBar/>
      </header> 
      <main>
          <RouteApp/>
 
      </main>
      <footer className='footer'>
        <div className='parrafoFoo'>
           <p>   Copyright © 1999-2024 MercadoLibre Chile Ltda.
            Av. Apoquindo 4800, Torre 2, piso 21, Las Condes, Santiago - Chile.  </p>
        </div>
            <div>
                <p>   Desarrollodo por: Anibal Jota   </p>
            </div>
      </footer>
    </>
  )
}
