import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer class="col-lg-12 col-mb-12 col-sm-12 py-4 w-100 bg-dark">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5 className='text-white'>John Doe</h5>
                        <p className='text-white'>40 rue Laura Dubold<br />69009 Lyon, France<br />Tel: 39 30 40 59<br /> <a href="mailto:john.doe@gmail.com" className='footer-link footer-link text-white'>john.doe@gmail.com</a></p>
                        <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" className='rs-link text-secondary '><i class="bi bi-github"></i></a>
                        <a href="https://x.com/JohnDoe149849" target="_blank" rel="noopener noreferrer" className='rs-link text-secondary mx-2'><i class="bi bi-twitter"></i></a>
                        <a href="https://fr.linkedin.com/in/john-doe-b67173224?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className='rs-link text-secondary'><i class="bi bi-linkedin"></i></a>
                    </Col>
                    <Col md={4}>
                        <h5 className='text-white'>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className='footer-link text-white'>Accueil</a></li>
                            <li><a href="/Services" className='footer-link text-white'>Services</a></li>
                            <li><a href="/Portfolio" className='footer-link text-white'>Portfolio</a></li>
                            <li><a href="/Contact" className='footer-link text-white'>Me contacter</a></li>
                            <li><a href="/Legales" className='footer-link text-white'>Mentions légales</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className='text-white'>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><a href="/portfolio" className='footer-link text-white'>Front Food</a></li>
                            <li><a href="/portfolio" className='footer-link text-white'>Restaurant Akira</a></li>
                            <li><a href="/portfolio" className='footer-link text-white'>Espace bien-être</a></li>
                            <li><a href="/portfolio" className='footer-link text-white'>SEO</a></li>
                            <li><a href="/portfolio" className='footer-link text-white'>Création d'une API</a></li>
                            <li><a href="/portfolio" className='footer-link text-white'>Maquette d'un site</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;