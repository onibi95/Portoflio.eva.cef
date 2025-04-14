import React, { useState } from 'react';
import hero from '../assets/hero-bg.jpg';
import photoabout from '../assets/john-doe-about.jpg';
import { ProgressBar, Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

// Added CSS for GitHub modal
const modalStyle = {
    githubModal: {
        backgroundColor: '#212529',
        color: 'white'
    },
    githubAvatar: {
        width: '20vw',
        margin: '0 auto 20px',
        display: 'block',
    },
    githubInfo: {
        margin: '10px 0'
    }
};

const Home = () => {
    const skills = [
        { name: "HTML5", level: 90, variant: "danger" },
        { name: "CSS3", level: 80, variant: "info" },
        { name: "JAVASCRIPT", level: 70, variant: "warning" },
        { name: "PHP", level: 60, variant: "success" },
        { name: "REACT", level: 50, variant: "primary" }
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
            <Modal show={show} onHide={handleClose} centered className="myModal">
                <Modal.Header closeButton className="border-bottom border-1 border-secondary" style={modalStyle.githubModal}>
                    <Modal.Title className="fw-bold">Mon profil GitHub</Modal.Title>
                </Modal.Header>
                <Modal.Body style={modalStyle.githubModal}>
                    {loading ? (
                        <div className="text-center py-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Chargement...</span>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="alert alert-warning">{error}</div>
                    ) : githubData ? (
                        <div className="d-flex">
                            {/* Avatar on left */}
                            <div className="me-4">
                                <Image 
                                    src={githubData.image || "https://avatars.githubusercontent.com/u/10639145"}
                                    style={{...modalStyle.githubAvatar, margin: '0'}}
                                    alt="GitHub Avatar"
                                />
                            </div>
                            
                            {/* Content on right */}
                            <div>
                                {/* User Info */}
                                <div className="d-flex align-items-center mb-3 border-bottom border-1 border-secondary p-2">
                                    <i className="bi bi-person me-2"></i>
                                    <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer">
                                        {githubData.name}
                                    </a>
                                </div>
                                
                                {/* Location */}
                                <div className="d-flex align-items-center mb-3 border-bottom border-1 border-secondary p-2">
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    <span></span>
                                </div>
                                
                                {/* Bio */}
                                <div className="mb-4 border-bottom border-1 border-secondary p-2">
                                    <i className="bi bi-card-text me-2"></i>
                                    <span>{githubData.bio}</span>
                                </div>
                                
                                {/* GitHub Stats */}
                                <div className="githubStats">
                                    <div className="d-flex align-items-center mb-2 border-bottom border-1 border-secondary p-2">
                                        <i className="bi bi-box me-2"></i>
                                        <span>Repositories : {githubData.repos}</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 border-bottom border-1 border-secondary p-2">
                                        <i className="bi bi-people me-2"></i>
                                        <span>Followers : {githubData.followers}</span>
                                    </div>
                                    <div className="d-flex align-items-center p-2 border-1 border-secondary">
                                        <i className="bi bi-people me-2"></i>
                                        <span>Following : {githubData.following}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </Modal.Body>
                <Modal.Footer style={modalStyle.githubModal} className="border-1 border-secondary">
                    <Button variant="light" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Main Content */}
            <Container className="my-5 py-4 px-4 shadow rounded">
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
                                className="w-100"
                                style={{ maxHeight: '250px', objectFit: 'cover' }}
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
                                        variant={skill.variant}
                                        className="rounded-0"
                                        style={{ height: '8px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;

