import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // Cambié la importación para usar la exportación nombrada
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap aquí

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Envuelve tu aplicación con CartProvider */}
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);


