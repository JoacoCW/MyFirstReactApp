import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBarReact = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/">Bookstore</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Inicio</Link>
                        <Link to="/MasVendidos">Más vendidos</Link>
                        <NavDropdown className="mx-5" title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><Link to="/categoria/Novela">Novelas</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><Link to="/categoria/Ensayo">Ensayos</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to="/categoria/Biografia">Biografías</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3."><Link to="/categoria/Noficcion">No ficción</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Categorías</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget number={3}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarReact