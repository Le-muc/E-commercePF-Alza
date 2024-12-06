// src/components/Description.jsx
import React from 'react';

const Description = ({ description, className = '' }) => {
    return (
        <div className={`description-container ${className}`}>
            <p className="description-text">{description}</p>
        </div>
    );
};

export default Description;

