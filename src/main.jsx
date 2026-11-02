import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import ParentWithoutCallBackHook from '../ParentWithoutCallBackHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    
    <ParentWithoutCallBackHook/>
  </StrictMode>,
)
