import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importar icono de carrito

const CartWidget = () => {
    return (
        <div className="me-3"> {/* Margen a la derecha para separar el ícono */}
            <a className="nav-link" href="#">
                <FaShoppingCart />
                <span className="badge bg-danger">3</span> {/* Muestra un número de items en el carrito */}
            </a>
        </div>
    );
};

export default CartWidget;

