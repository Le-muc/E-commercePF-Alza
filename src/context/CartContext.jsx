// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Componente proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (product, quantity) => {
        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const newQuantity = existingProduct.quantity + quantity;
            if (newQuantity <= product.stock) {
                // Actualizar la cantidad del producto en el carrito si hay suficiente stock
                setCart(cart.map(item =>
                    item.id === product.id ? { ...item, quantity: newQuantity } : item
                ));
            } else {
                // Alerta si no hay suficiente stock
                alert(`Solo puedes agregar hasta ${product.stock} unidades de "${product.name}".`);
            }
        } else {
            // Si el producto no está en el carrito, agregarlo
            if (quantity <= product.stock) {
                setCart([...cart, { ...product, quantity }]);
            } else {
                // Alerta si no hay suficiente stock
                alert(`Solo puedes agregar hasta ${product.stock} unidades de "${product.name}".`);
            }
        }
    };

    // Eliminar un producto del carrito
    const removeFromCart = (productId) => {
        // Filtrar el carrito para eliminar el producto por ID
        setCart(cart.filter(item => item.id !== productId));
    };

    // Limpiar el carrito
    const clearCart = () => setCart([]);

    // Calcular el total de productos en el carrito
    const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);

    // Calcular el precio total del carrito
    const cartTotalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Actualizar la cantidad de un producto en el carrito
    const updateQuantity = (productId, newQuantity, productStock) => {
        if (newQuantity <= 0) {
            // Si la cantidad es 0 o menor, eliminar el producto del carrito
            removeFromCart(productId);
        } else if (newQuantity <= productStock) {
            // Si la nueva cantidad es válida y no supera el stock
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            ));
        } else {
            // Si la nueva cantidad supera el stock, mostrar una alerta
            alert(`Solo puedes agregar hasta ${productStock} unidades.`);
        }
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            cartTotal, 
            cartTotalPrice, 
            updateQuantity // Proporcionar la función de actualización de cantidad
        }}>
            {children}
        </CartContext.Provider>
    );
};








