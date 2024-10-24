import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import CartWidget from './CartWidget'; // Importar el nuevo componente

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LeMuc</a>
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
                            <a className="nav-link" href="#">Categoría 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoría 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoría 3</a>
                        </li>
                    </ul>
                    <CartWidget className="ms-auto" /> {/* Colocar el CartWidget a la derecha */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;










  



