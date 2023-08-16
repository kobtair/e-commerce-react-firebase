import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserContextProvider } from './contexts/UserContext/UserContext.jsx'
import { ShopContextProvider } from './contexts/ShopContext/ShopContext.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ShopContextProvider>
        <App />
        </ShopContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
