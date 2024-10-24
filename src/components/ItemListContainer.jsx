// src/components/ItemListContainer.jsx
import React from 'react';

// Componente que muestra un mensaje de bienvenida con una prop greeting
const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-4 text-center">
            <h2>{greeting}</h2> {/* Usamos la prop greeting aquí */}
        </div>
    );
};

export default ItemListContainer;

