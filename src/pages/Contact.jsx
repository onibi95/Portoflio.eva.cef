import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
    return (
        <Container className="py-5">
            {/* Titre principal */}
            <div className="text-center mb-5 title-container">
                <h1 className="fw-bold mb-3">Contact</h1>
                <p className="lead">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <div className="blue-underline mx-auto"></div>
            </div>

            <Row className="g-4">
                {/* Colonne Formulaire */}
                <Col lg={6} className="mb-5 mb-lg-0">
                    <div className="position-relative mb-4">
                        <h2 className="section-title mb-4">
                            Formulaire de contact
                        </h2>
                        <div className="title-underline"></div>
                    </div>

                    <Form>
                        <Form.Group className="mb-2" controlId="nameInput">
                            <Form.Control
                                type="text"
                                placeholder="Votre nom"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="emailInput">
                            <Form.Control
                                type="email"
                                placeholder="Votre adresse email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="phoneInput">
                            <Form.Control
                                type="tel"
                                placeholder="Votre numéro de téléphone"
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="subjectInput">
                            <Form.Control
                                type="text"
                                placeholder="Sujet"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="messageTextarea">
                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Votre message"
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="px-4 py-2 mx-auto d-block"

                        >
                            Envoyer
                        </Button>
                    </Form>
                </Col>

                {/* Colonne Coordonnées */}
                <Col lg={6}>
                    <div className="position-relative mb-4">
                        <h2 className="section-title mb-4">
                            Mes coordonnées
                        </h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="px-1 rounded">
                        <address>

                        <h5 className="d-flex align-items-center mb-3">
                                John Doe
                            </h5>
                            <p className="d-flex align-items-center mb-3">
                                <i className="bi bi-map me-3 text-dark"></i>
                                40 rue Laure Diebold
                            </p>
                            <p className="d-flex align-items-center mb-3">
                                <i className="bi bi-geo me-3 text-dark"></i>
                                69009 Lyon, France
                            </p>
                            <p className="d-flex align-items-center mb-3">
                                <i className="bi bi-phone me-3 text-dark"></i>
                                10 20 30 40 50
                            </p>
                            <p className="d-flex align-items-center mb-3">
                                <i className="bi bi-envelope-at me-3 text-dark"></i>
                                john.doe@gmail.com
                            </p>
                        </address>
                    </div>

                    {/* Carte */}
                    <div className="mt-3 ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5972579678963!2d4.805215315569558!3d45.75817997910557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ1JzI5LjQiTiA0wrA0OCcyMS4wIkU!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="Carte de localisation"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;