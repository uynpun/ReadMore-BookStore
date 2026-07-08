// main.jsx - Tuần 6
// ✅ Wrap App với BrowserRouter ở entry point
// ✅ BrowserRouter đặt ở đây (không đặt trong App) → chuẩn pattern

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
