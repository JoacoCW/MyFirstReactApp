import React from 'react'
import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'

const NavBarReact = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="mx-5" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="mx-5" href="#link">Más vendidos</Nav.Link>
                        <NavDropdown className="mx-5" title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Novelas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ensayos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Biografías</NavDropdown.Item>
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