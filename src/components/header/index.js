import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./index.css";

function Header() {
    return   <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className={"menu-btn"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={"menu-btn-burger"}/>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="#home">INICIO</Nav.Link>
                <NavDropdown title="RECETAS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Postres</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Comida navideña</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Comida casera</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Comida para fiestas</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#about">SOBRE NOSOTROS</Nav.Link>
                <Nav.Link href="#contact">CONTACTO</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export {Header}