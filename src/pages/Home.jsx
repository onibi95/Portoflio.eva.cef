import React, { useState, useEffect } from 'react';
import hero from '../assets/hero-bg.jpg';
import photoabout from '../assets/john-doe-about.jpg';
import { ProgressBar, Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import "bootstrap-icons/font/bootstrap-icons.css";


const Home = () => {
    const skills = [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 80 },
        { name: "JAVASCRIPT", level: 70 },
        { name: "PHP", level: 60 },
        { name: "REACT", level: 50 }
    ];
    const [show, setShow] = useState(false);
    const [githubData, setGithubData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        fetchGithubData();
    };

    const fetchGithubData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.github.com/users/github-john-doe');
            if (!response.ok) throw new Error('Profil non trouvé');
            const data = await response.json();
            setGithubData({
                name: data.name || 'John Doe',
                bio: data.bio || 'As we all know, John Doe\'s identity is unknown. I just wanted to contribute without being known.',
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                image: data.avatar_url,
                location: data.location
            });
        } catch (err) {
            setError(err.message);
            // Données mockées en cas d'erreur
            setGithubData({
                name: 'John Doe',
                bio: 'As we all know, John Doe\'s identity is unknown. I just wanted to contribute without being known.',
                repos: 1,
                followers: 16,
                following: 0,
                location: null
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section position-relative">
                <Image
                    src={hero}
                    alt="John Doe"
                    fluid
                    className="w-100 hero-image"
                    style={{ height: '100vh', objectFit: 'cover' }}
                />
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <Container className="text-center text-white">
                        <h1 className="display-2 fw-bold mb-4">Bonjour, je suis John Doe</h1>
                        <p className="display-5 fw-medium mb-4">Développeur web full stack</p>
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-4 py-2 mt-3 bg-danger "
                            onClick={handleShow}
                        >
                            En savoir plus
                        </Button>
                    </Container>
                </div>
            </div>

            {/* Modal GitHub */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fw-bold">Mon profil GitHub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? (
                        <div className="text-center py-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Chargement...</span>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="alert alert-warning">{error}</div>
                    ) : githubData ? (
                        <>
                            <Col lg={6}>
                                <div className='github-avatar'>
                                    <span>{githubData.image}</span>

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex mb-3">
                                    <h5 className="fw-bold mb-0 me-2 bi bi-person"><a href="https://github.com/github-john-doe" target="_blank" rel='external'>{githubData.name}</a></h5>
                                </div>

                                <div className="d-flex  mb-2 bi bi-geo-alt-fill">
                                    <span>{githubData.location}</span>
                                </div>

                                <p className="mb-4 bi bi-card-text">{githubData.bio}</p>

                                <div className="github-stats">
                                    <div className="d-flex  mb-2 bi bi-box">

                                        <span>Repositories : {githubData.repos}</span>
                                    </div>
                                    <div className="d-flex  mb-2 bi bi-people">

                                        <span>Followers : {githubData.followers}</span>
                                    </div>
                                    <div className="d-flex bi bi-people">

                                        <span>Following : {githubData.following}</span>
                                    </div>
                                </div>
                            </Col>
                        </>
                    ) : null}
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Main Content */}
            <Container className="py-5">
                <Row>
                    {/* Section À propos - Colonne de gauche */}
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <div className="position-relative mb-4">
                            <h2 className="section-title">
                                A propos
                            </h2>
                            <div className="title-underline"></div>
                        </div>

                        {/* Image au-dessus du texte */}
                        <div className="mb-4">
                            <Image
                                src={photoabout}
                                alt="John Doe"
                                fluid
                                rounded
                                className="shadow w-100"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                        </div>

                        <div>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, nocerebabibus consectetur. tempore perfeciedis nostrum, ex delicata redenetis imperdi ad iure enim plexeari? Natus, neque ai?</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, nocerebabibus consectetur. tempore perfeciedis nostrum, ex delicata redenetis imperdi ad iure enim plexeari? Natus, neque ai?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, nocerebabibus consectetur. tempore perfeciedis nostrum, ex delicata redenetis imperdi ad iure enim plexeari? Natus, neque ai?</p>
                        </div>
                    </Col>

                    {/* Section Compétences - Colonne de droite */}
                    <Col lg={6}>
                        <div className="position-relative mb-4">
                            <h2 className="section-title">
                                Mes compétences
                            </h2>
                            <div className="title-underline"></div>
                        </div>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="fw-medium">{skill.name}</span>
                                        <span className="text-muted">{skill.level}%</span>
                                    </div>
                                    <ProgressBar
                                        now={skill.level}
                                        variant="primary"
                                        className="rounded-0"
                                        style={{ height: '8px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default Home;