import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Navbar.Brand as={Link} to="/" className="custom-brand">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/products" className="custom-link">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/cart" className="custom-link">Carrito</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="custom-link">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/login" className="custom-link">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register" className="custom-link">Registro</Nav.Link>

                    <Link to="/login">Iniciar Sesión</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
