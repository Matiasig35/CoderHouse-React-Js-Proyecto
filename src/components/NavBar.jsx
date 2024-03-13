import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">Mate Justo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#termos">Termos</Nav.Link>
                    <Nav.Link href="#bolsos">Bolsos</Nav.Link>
                    <NavDropdown title="Yerbas" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Clasica</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Barbacua</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Hierbas Serranas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#otrosProductos">Otros productos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
            </Container>
        </Navbar>
    )
}