import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';



const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>


            <Navbar bg="light" expand="sm" class="col-lg-12 col-mb-12 col-sm-12">
                <Container>
                    {/* Logo/Titre (gauche) */}
                    <Navbar.Brand
                        href="/"
                        className="fw-bold fs-4"
                        style={{ letterSpacing: '1px' }}
                    >
                        JOHN DOE
                    </Navbar.Brand>

                    {/* Liens (droite) */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="/"
                                className="mx-2 text-uppercase fw-medium"
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="/Services"
                                className="mx-2 text-uppercase fw-medium"
                            >
                                Services
                            </Nav.Link>
                            <Nav.Link
                                href="/Portfolio"
                                className="mx-2 text-uppercase fw-medium"
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link
                                href="/Contact"
                                className="mx-2 text-uppercase fw-medium"
                            >
                                Contact
                            </Nav.Link>
                            <Nav.Link
                                href="/Legales"
                                className="mx-2 text-uppercase fw-medium"
                            >
                                Mentions légales
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;