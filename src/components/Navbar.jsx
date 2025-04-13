import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    return (
        <Navbar
            bg="light"
            expand="sm"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            className="py-3 shadow-sm sticky-top"
        >
            <Container>
                {/* Logo/Titre */}
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="fw-bold fs-4"
                    style={{ letterSpacing: '1px' }}
                    onClick={() => setExpanded(false)}
                >
                    JOHN DOE
                </Navbar.Brand>

                {/* Bouton Burger (visible seulement sur mobile) */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="border-0"
                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                {/* Menu (devient burger sur mobile) */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`mx-2 text-uppercase fw-medium ${location.pathname === '/' ? 'active-nav-link' : ''}`}
                            onClick={() => setExpanded(false)}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/services"
                            className={`mx-2 text-uppercase fw-medium ${location.pathname === '/services' ? 'active-nav-link' : ''}`}
                            onClick={() => setExpanded(false)}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/portfolio"
                            className={`mx-2 text-uppercase fw-medium ${location.pathname === '/portfolio' ? 'active-nav-link' : ''}`}
                            onClick={() => setExpanded(false)}
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className={`mx-2 text-uppercase fw-medium ${location.pathname === '/contact' ? 'active-nav-link' : ''}`}
                            onClick={() => setExpanded(false)}
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/Legales"
                            className={`mx-2 text-uppercase fw-medium ${location.pathname === '/Legales' ? 'active-nav-link' : ''}`}
                            onClick={() => setExpanded(false)}
                        >
                            Mentions légales
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;