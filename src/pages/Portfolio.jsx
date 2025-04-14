import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import banner from '../assets/banner.jpg';
import freshFood from '../assets/portfolio/fresh-food.jpg';
import restaurantAkira from '../assets/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../assets/portfolio/espace-bien-etre.jpg';
import seo from '../assets/portfolio/seo.jpg';
import api from '../assets/portfolio/coder.jpg';
import webAnalytics from '../assets/portfolio/screens.jpg';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Fresh Food",
            image: freshFood,
            description: "Site de vente de produits frais en ligne",
            details: "Site réalisé avec PHP et MySQL",
            link: "#"
        },
        {
            id: 2,
            title: "Restaurant Akira",
            image: restaurantAkira,
            description: "Site vitrine pour restaurant japonais",
            details: "Site réalisé avec WordPress",
            link: "#"
        },
        {
            id: 3,
            title: "Espace bien-être",
            image: espaceBienEtre,
            description: "Site de réservation pour centre de bien-être",
            details: "Site réalisé avec LARAVEL",
            link: "#"
        },
        {
            id: 4,
            title: "Web Analytics",
            image: webAnalytics,
            description: "Dashboard d'analyse web",
            details: "Responsive Design • Module Marketing • Web Analytics",
            link: "#"
        },
        {
            id: 5,
            title: "SEO",
            image: seo,
            description: "Amélioration du référencement d'un site e-commerce",
            details: "Utilisation des outils SEO",
            link: "#"
        },
        {
            id: 6,
            title: "Création d'une API",
            image: api,
            description: "API RESTFULL publique",
            details: "Développement d'une API sécurisée",
            link: "#"
        }
    ];


    return (
        <>
            <img
                src={banner}
                alt="bannière"
                className="w-100"
            />

            {/* Hero Section */}
            <section className="bg-light py-5">
                <Container className="py-5">
                    {/* Titre */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold mb-3">Portfolio</h1>
                        <p className="lead">Voici quelques-unes de mes réalisations.</p>
                        <div className="blue-underline mx-auto"></div>
                    </div>

                    {/* Grille des projets */}
                    <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                        {projects.map((project, index) => (
                            <Col key={index}>
                                <Card className="h-100 border-0 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        alt={project.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <Card.Body>

                                        <Card.Title className="text-center fw-bold mb-0 ">{project.title}</Card.Title>
                                        <Card.Text className="text-center mb-2 ">{project.description}</Card.Text>
                                        <div className="mt-auto text-center">
                                            <Button
                                                variant="primary"
                                                href={project.link}
                                                className="mb-3 custom-btn"
                                            >
                                                Voir le site
                                            </Button>
                                        </div>
                                        <ListGroup variant="flush" className="border-top">
                                            <ListGroup.Item className="text-center text-muted py-2">
                                                {project.details}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>


                </Container>
            </section>
        </>
    )
}

export default Portfolio