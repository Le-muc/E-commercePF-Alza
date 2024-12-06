// src/components/CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para navegación
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito

const CartWidget = () => {
    const { cart } = useCart(); // Usamos 'cart' para obtener los productos en el carrito

    // Calcular la cantidad total de productos en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-widget position-relative">
            <Link to="/checkout" className="btn btn-light position-relative d-flex align-items-center">
                {/* Ícono del carrito */}
                <i className="fas fa-shopping-cart fa-lg"></i>

                {/* Mostrar el badge solo si hay productos en el carrito */}
                {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default CartWidget;







