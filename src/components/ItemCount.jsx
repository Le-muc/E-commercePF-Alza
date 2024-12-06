//src/components/ItemCount.jsx
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-secondary" onClick={decrement}>-</button>
            <span className="mx-3">{count}</span>
            <button className="btn btn-secondary" onClick={increment}>+</button>
            <button 
                className="btn btn-primary ml-3" 
                onClick={() => onAdd(count)}  // Llama a la función onAdd con el valor de count
                disabled={stock === 0}        // Desactiva el botón si el stock es 0
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;




