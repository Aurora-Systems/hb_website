import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import Site from './site'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Site />
  </StrictMode>,
)
