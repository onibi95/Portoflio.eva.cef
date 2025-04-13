import Footer from '../components/Footer';
import { Accordion, Container } from 'react-bootstrap';


const Legales = () => {
    return (
        <Container className="py-4">
            <div className="text-center mb-5 title-container">
                <h1 className="fw-bold">Mentions légales</h1>
                <div className="blue-underline"></div>
            </div>
            <Accordion defaultActiveKey="0" flush className="mb-5">

                {/* Section Éditeur */}
                <Accordion.Item eventKey="0" className="border">
                    <Accordion.Header className="fw-bold">Éditeur du site</Accordion.Header>
                    <Accordion.Body>
                        <address className="mb-0">
                            <p className="mb-2"><strong>John Doe</strong></p>
                            <p className="mb-2">40 rue Laure Diebold</p>
                            <p className="mb-2">69009 Lyon, France</p>
                            <p className="mb-2">Tél: 10 20 30 40 50</p>
                            <p className="mb-0">Email: <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                        </address>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Section Hébergeur */}
                <Accordion.Item eventKey="1" className="border">
                    <Accordion.Header className="fw-bold">Hébergeur</Accordion.Header>
                    <Accordion.Body>
                        <div className="ps-3">
                            <p className="mb-2"><strong>alwaysdata</strong></p>
                            <p className="mb-2">91 Rue du Faubourg Saint-Honoré</p>
                            <p className="mb-2">75008 Paris, France</p>
                            <p className="mb-0">
                                Site: <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                            </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>


                {/* Autres sections (optionnel) */}
                <Accordion.Item eventKey="2" className="border">
                    <Accordion.Header className="fw-bold bg-light">Crédits</Accordion.Header>
                    <Accordion.Body>
                        <div className="ps-3">
                            <p className="mb-2"><strong>Crédits</strong></p>
                            <p className="mb-2">Ce site a été réalisé par John Doe, étudiant au <a href="hhttps://www.centre-europeen-formation.fr" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.</p>
                            <p className="mb-2">
                                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>.
                            </p>
                            <p className="mb-0">
                                La favicon de ce site a été fournie par <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>.
                            </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion >
            < Footer />
        </Container>

    )
}

export default Legales;