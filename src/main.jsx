import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import './index.css'
import App from './App.jsx'

import { CartContextProvider } from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Provider>
  </StrictMode>,
)
