import React from 'react'
import { Route, Routes } from 'react-router'
import { Contac } from '../pages/Contac'
import { AboutWe } from '../pages/AboutWe'
import { HomePage } from '../pages/HomePage'

export const RouteApp = () => {

  return (
    <Routes>
        <Route path='/contac' element= { <Contac/> }   />
        <Route path='/about'  element= { <AboutWe/> }  />
        <Route path='/'       element= { <HomePage/> } />
    </Routes>
  )
}
