// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/src/data/products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error al cargar los productos:', error));
    }, []);

    return (
        <div className="container mt-4 text-center">
            <h2>{greeting}</h2>
            <div className="row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;




