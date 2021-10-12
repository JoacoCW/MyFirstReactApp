import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from './CartWidget';
import {useContext} from "react";
import CartContext from "../CartContext";

const NavBar = (props) => {

    const {contador} = useContext(CartContext)

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid px-5">
                <NavLink className="navbar-brand" to="/">Bookstore</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize" to={'/'}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize" aria-current="page" to={'/bestSellers'}>Más vendidos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link fontSize" to={'/nuevos'}>Novedades</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="nav-link dropdown-toggle fontSize" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="dropdown-item fontSize" to={'/categoria/Novela'}>Novelas</NavLink></li>
                                <li><NavLink className="dropdown-item fontSize" to={'/categoria/Ensayo'}>Ensayo</NavLink></li>
                                <li><NavLink className="dropdown-item fontSize" to={'/categoria/Biografia'}>Biografías</NavLink></li>
                                <li><NavLink className="dropdown-item fontSize" to={'/categoria/Noficcion'}>No Ficción</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;