import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Rejestracja service workera
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')  // Rejestrujemy nasz service worker
    .then((registration) => {
      console.log('Service Worker zarejestrowany z zakresem: ', registration.scope);
    })
    .catch((error) => {
      console.log('Błąd rejestracji Service Workera: ', error);
    });
}


// Renderowanie aplikacji
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
