// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout'; // Importamos el componente Checkout
import Cart from './components/Cart'; // Asegúrate de importar el componente Cart
import { CartProvider } from './context/CartContext'; // Asegúrate de importar el proveedor del carrito

const App = () => {
    return (
        <CartProvider> {/* Envolvemos la app en el CartProvider */}
            <Router>
                {/* Barra de navegación */}
                <NavBar />

                {/* Rutas de la aplicación */}
                <Routes>
                    <Route path="/" element={<ItemListContainer />} /> {/* Página principal */}
                    <Route path="/category/:categoryId" element={<ItemListContainer />} /> {/* Categorías */}
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} /> {/* Detalle del producto */}
                    <Route path="/checkout" element={<Checkout />} /> {/* Ruta para el Checkout */}
                    <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
















