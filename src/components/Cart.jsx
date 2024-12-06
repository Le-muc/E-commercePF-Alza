// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, cartTotalPrice } = useCart();

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>

      {cart.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>

              {/* Aquí va el botón simplificado */}
              <button onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </div>
          ))}
          <div>
            <h3>Total: ${cartTotalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;












