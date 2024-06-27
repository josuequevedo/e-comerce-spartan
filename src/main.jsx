import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { AppEcomerce } from './AppEcomerce.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppEcomerce />
    </BrowserRouter>
  </React.StrictMode>,
)
