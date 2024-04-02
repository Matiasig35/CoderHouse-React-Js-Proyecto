import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand to="/" as={NavLink}>Mate Justo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/category/termo" as={NavLink}>Termos</Nav.Link>
                    <Nav.Link to="/category/bolso" as={NavLink}>Bolsos</Nav.Link>
                    <NavDropdown title="Yerbas" id="collapsible-nav-dropdown">
                        <NavDropdown.Item to="/category/alimento" as={NavLink}>Clasica</NavDropdown.Item>
                        <NavDropdown.Item to="/category/alimento" as={NavLink}>Barbacua</NavDropdown.Item>
                        <NavDropdown.Item to="/category/alimento" as={NavLink}>Hierbas Serranas</NavDropdown.Item>
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