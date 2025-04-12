import React from 'react';
import hero from '../assets/hero-bg.jpg';
import { ProgressBar } from 'react-bootstrap';
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
            <div>
                <h1>Bonjour</h1>
                <img
                    src={hero}
                    alt="John Doe"
                />
                <section id="skills" className="my-5">
                    <h2 className="text-center mb-4">Mes compétences</h2>
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-3">
                            <p className="mb-1">{skill.name}</p>
                            <ProgressBar now={skill.level} label={`${skill.level}%`} />
                        </div>
                    ))}
                </section>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}


export default Home