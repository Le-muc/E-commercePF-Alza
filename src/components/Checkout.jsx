import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, cartTotalPrice, clearCart } = useCart(); // Obtener los datos del carrito
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
  });

  // Validación de campos
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 3
          ? 'El nombre debe tener al menos 3 caracteres.'
          : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? 'Debe ser un correo electrónico válido.'
          : '';
      case 'address':
        return value.trim().length < 5
          ? 'La dirección debe tener al menos 5 caracteres.'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {
      name: validateField('name', userData.name),
      email: validateField('email', userData.email),
      address: validateField('address', userData.address),
    };

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((error) => error !== '');
    if (hasErrors) {
      alert('Por favor, corrige los errores en el formulario.');
      return;
    }

    // Lógica de confirmación del checkout
    alert('Compra confirmada. Datos enviados!');
    clearCart(); // Vaciar el carrito después de realizar el checkout
  };

  useEffect(() => {
    if (cart.length === 0) {
      alert('El carrito está vacío. Por favor, agrega productos antes de proceder al checkout.');
    }
  }, [cart]);

  return (
    <div className="container my-5">
      <h2>Resumen de tu compra</h2>

      {cart.length === 0 ? (
        <p>No hay productos en tu carrito. <Link to="/cart">Volver al carrito</Link></p>
      ) : (
        <div>
          <h3>Productos en el carrito:</h3>
          {cart.map(item => (
            <div key={item.id}>
              <p>{item.name} - Cantidad: {item.quantity} - Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
          <div>
            <h3>Total a pagar: ${cartTotalPrice.toFixed(2)}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={userData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  value={userData.address}
                  onChange={handleChange}
                  required
                />
                {errors.address && <div className="text-danger">{errors.address}</div>}
              </div>
              <button type="submit" className="btn btn-primary">
                Confirmar compra
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;





