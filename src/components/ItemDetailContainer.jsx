import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Suponiendo que los productos están en el archivo products.json
import productsData from '../data/products.json';

const ItemDetailContainer = () => {
    // Obtener el parámetro itemId de la URL
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Para navegar a otra ruta si es necesario

    // Usamos useEffect para cargar los detalles del producto
    useEffect(() => {
        // Simulamos la carga asíncrona de los datos
        const productFound = productsData.find(product => product.id === parseInt(itemId));

        // Si no encontramos el producto, redirigimos al catálogo
        if (!productFound) {
            navigate('/'); // Redirigir a la página principal si no se encuentra el producto
        } else {
            setProduct(productFound);
        }

        setLoading(false); // Cambiamos el estado de carga
    }, [itemId, navigate]); // Dependencias: cambiamos cuando itemId cambia

    // Mientras cargamos, mostramos un mensaje de carga
    if (loading) {
        return <div>Loading...</div>;
    }

    // Si no se encuentra el producto, mostramos un mensaje
    if (!product) {
        return <div>Producto no encontrado.</div>;
    }

    return (
        <div className="container mt-4">
            <h2>{product.name}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p>{product.description}</p>
                    <p><strong>Precio: </strong>${product.price}</p>
                    <p><strong>Categoría: </strong>{product.category}</p>
                    {/* Aquí podrías agregar más detalles del producto si lo deseas */}
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;

