//src/components/ItemDetail.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';
import Description from './Description'; // Importamos el nuevo componente

const ItemDetail = ({ product }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = (quantity) => {
        addToCart(product, quantity);
        setAddedToCart(true);
        alert(`${quantity} unidades de "${product.name}" añadidas al carrito.`);
    };

    return (
        <div className="container my-5"> 
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Precio: </strong>${product.price}</p>
                    <p><strong>Stock disponible: </strong>{product.stock}</p>

                    {!addedToCart ? (
                        <>
                            <ItemCount 
                                stock={product.stock} 
                                initial={1} 
                                onAdd={handleAddToCart}  // Pasamos handleAddToCart como prop
                            />
                        </>
                    ) : (
                        <button className="btn btn-success" disabled>
                            Producto agregado al carrito
                        </button>
                    )}

                    {/* Descripción adicional del producto */}
                    <Description details={product.details} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;








