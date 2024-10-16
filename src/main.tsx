import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Site from './site'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Site />
    </BrowserRouter>
    <ToastContainer/>

  </StrictMode>,
)
