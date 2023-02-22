import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  'bootstrap/dist/css/bootstrap.min.css' 
import './bootstrap.bundle.min.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

