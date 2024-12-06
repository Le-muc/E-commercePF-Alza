// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../data/products.json';  // Importamos los productos desde el JSON

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = products.find((product) => product.id === parseInt(itemId));
        setProduct(selectedProduct);
    }, [itemId]);

    return (
        <div>
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;



