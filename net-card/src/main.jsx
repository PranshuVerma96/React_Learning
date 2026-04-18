import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './components/profile.jsx'
import { Practices } from './practise.jsx'
import './index.css'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  // // <StrictMode>
    <App />
  // {/* <Practices/> */}
  // {/* <Profile/> */}
  // // </StrictMode>,
)
