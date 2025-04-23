import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import AppCommerce from './06/AppCommerce'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCommerce />
  </StrictMode>,
)
