import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-4 w-100 fixed-bottom" class="col-lg-12 col-mb-12 col-sm-12">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>John Doe</h5>
                        <p>40 rue Laura Dubold<br />69009 Lyon, France<br />Tel: 39 30 40 59<br /> <a href="mailto:john.doe@gmail.com" className='footer-link'>john.doe@gmail.com</a></p>
                        <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" className='rs-link'><i class="bi bi-github"></i></a>
                        <a href="https://x.com/JohnDoe149849" target="_blank" rel="noopener noreferrer" className='rs-link'><i class="bi bi-twitter"></i></a>
                        <a href="https://fr.linkedin.com/in/john-doe-b67173224?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className='rs-link'><i class="bi bi-linkedin"></i></a>
                    </Col>
                    <Col md={4}>
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className='footer-link'>Accueil</a></li>
                            <li><a href="/Services" className='footer-link'>Services</a></li>
                            <li><a href="/Portfolio" className='footer-link'>Portfolio</a></li>
                            <li><a href="/Contact" className='footer-link'>Me contacter</a></li>
                            <li><a href="/Legales" className='footer-link'>Mentions légales</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><a href="/portfolio" className='footer-link'>Front Food</a></li>
                            <li><a href="/portfolio" className='footer-link'>Restaurant Akira</a></li>
                            <li><a href="/portfolio" className='footer-link'>Espace bien-être</a></li>
                            <li><a href="/portfolio" className='footer-link'>SEO</a></li>
                            <li><a href="/portfolio" className='footer-link'>Création d'une API</a></li>
                            <li><a href="/portfolio" className='footer-link'>Maquette d'un site</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;