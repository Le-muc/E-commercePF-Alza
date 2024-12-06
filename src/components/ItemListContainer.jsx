// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json'; // Ahora lo importamos directamente

const ItemListContainer = ({ greeting }) => {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        setProductsList(products); // Cargamos los productos directamente desde el archivo JSON
    }, []);

    return (
        <div className="container mt-4 text-center">
            <h2>{greeting}</h2>
            <div className="row">
                {productsList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;







