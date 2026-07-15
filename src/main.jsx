// main.jsx - Tuần 10
// ✅ Wrap App với BrowserRouter + CartProvider + ThemeProvider
// ✅ Tuần 10: Thêm Redux Provider (store)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
