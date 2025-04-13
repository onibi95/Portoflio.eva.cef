import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 w-100 fixed-bottom" class="col-lg-12 col-mb-12 col-sm-12">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>John Doe</h5>
                        <p>40 rue Laura Dubold<br />69009 Lyon, France<br />Tel: 39 30 40 59<br /> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                    </Col>
                    <Col md={4}>
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/Services">Services</a></li>
                            <li><a href="/Portfolio">Portfolio</a></li>
                            <li><a href="/Contact">Me contacter</a></li>
                            <li><a href="/Legales">Mentions légales</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li>Front Food</li>
                            <li>Restaurant Mus</li>
                            <li>Estece beta-etre</li>
                            <li>SEO</li>
                            <li>Création d'une API</li>
                            <li>Maquette d'un site</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;