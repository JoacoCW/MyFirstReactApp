import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Bookstore</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item mx-5">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item mx-5">
                <a className="nav-link" href="#">Categorías</a>
                </li>
                <li className="nav-item mx-5">
                <a className="nav-link" href="#">Más vendidos</a>
                </li>
            </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
    );
}

export default NavBar;