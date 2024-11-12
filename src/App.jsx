// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    return (
        // Envolvemos la aplicación en el componente Router para habilitar la navegación
        <Router>
            {/* El componente NavBar siempre estará visible en la parte superior */}
            <NavBar />
            {/* Definimos las rutas de la aplicación dentro de Routes */}
            <Routes>
                {/* Ruta para la página de inicio, que muestra la lista completa de productos */}
                <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a mi E-commerce!" />} />
                
                {/* Ruta para las categorías, usa el parámetro :categoryId para identificar la categoría */}
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                
                {/* Ruta para el detalle del producto, usa el parámetro :itemId para identificar el producto */}
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
};

export default App;







