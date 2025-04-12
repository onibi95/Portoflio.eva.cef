import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import React from 'react';
import banner from '../assets/banner.jpg';

const Services = () => {
    const services = [
        {
            title: "UX Design",
            description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
        },
        {
            title: "Développement web",
            description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
        },
        {
            title: "Référencement",
            description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
        }
    ];

    return (
        <>
            <img
                src={banner}
                alt="bannière"
            />

            {/* Hero Section */}
            <section className="bg-light py-5">
                <Container>
                    <h1 className="display-4 fw-bold text-center mb-3">Mon offre de services</h1>
                    <p className="lead text-center mb-5">Voici les prestations sur lesquelles je peux intervenir</p>

                    {/* Grille des services */}
                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col key={index} md={4}>
                                <Card className="h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <Card.Title className="fw-bold fs-3 mb-3">{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Services;
