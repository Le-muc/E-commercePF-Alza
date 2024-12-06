// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importar el hook useCart

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Acceder a la función addToCart del contexto

  const handleAddToCart = () => {
    addToCart(product, 1); // Añadir el producto al carrito con cantidad 1
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>${product.price}</strong></p>
          <div className="d-flex justify-content-between">
            <button onClick={handleAddToCart} className="btn btn-success">
              Añadir al carrito
            </button>
            <Link to={`/item/${product.id}`} className="btn btn-primary">
              Ver Detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;





  

