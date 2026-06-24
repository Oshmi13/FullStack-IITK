import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import MyCom1 from './MyCom1.jsx'
import MyCom2 from './MyCom2.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  //</StrictMode>,
)
