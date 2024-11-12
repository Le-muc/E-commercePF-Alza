import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Precio: </strong>${product.price}</p>
                    <a href={`/item/${product.id}`} className="btn btn-primary">
                        Ver Detalle
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
