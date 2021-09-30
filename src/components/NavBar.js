import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const NavBarReact = () => {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">Inicio</Link>
                            <Nav.Link><Link to="/MasVendidos">Más vendidos</Link></Nav.Link>
                            <Link to="/ComponentA">Componente A</Link>
                            <Link to="/ComponentB">Componente B</Link>
                            <Link to="/ComponentC">Componente C</Link>
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
            <Switch>
                <Route exact path="/ComponenteA">
                    <ComponentA />
                </Route>
                <Route path="/ComponenteB">
                    <ComponentB />
                </Route>
                <Route path="/ComponenteC">
                    <ComponentC />
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBarReact