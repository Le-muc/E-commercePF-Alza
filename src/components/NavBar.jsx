// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LeMuc</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/categoria1">Categoría 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/categoria2">Categoría 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/categoria3">Categoría 3</Link>
                        </li>
                    </ul>
                    {/* Envolvemos el CartWidget con un Link hacia /cart */}
                    <Link to="/cart" className="ms-auto">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;












  



