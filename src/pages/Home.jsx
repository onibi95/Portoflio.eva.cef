import React from 'react';
import hero from '../assets/hero-bg.jpg';
import photoabout from '../assets/john-doe-about.jpg';
import { ProgressBar, Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
    const skills = [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 80 },
        { name: "JAVASCRIPT", level: 70 },
        { name: "PHP", level: 60 },
        { name: "REACT", level: 50 }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="hero-container position-relative">
                <Image
                    src={hero}
                    alt="John Doe"
                    fluid
                    className="w-100 hero-image"
                />
                <div className="hero-overlay d-flex align-items-center justify-content-center">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bold mb-3">John Doe</h1>
                        <p className="lead">Développeur Web Full Stack</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <Container className="py-5">
                <Row>
                    {/* Section À propos - Colonne de gauche */}
                    <Col lg={7} className="mb-5 mb-lg-0">
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
                    <Col lg={5}>
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