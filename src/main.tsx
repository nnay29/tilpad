import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render( // telling TypeScript: "I know you think this might be null, but I promise you it’s not. Just trust me."
  <StrictMode>
    <App />
  </StrictMode>,
)

