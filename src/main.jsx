import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * El archivo main.jsx sirve para crear el proyecto React, en modo javascript estricto.
 * Al final, creamos el componente App, que se encarga de mostrar nuestro proyecto
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
