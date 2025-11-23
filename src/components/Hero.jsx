import './Hero.css';

const Hero = ({ setActiveSection }) => {
    return (
        <main className="hero">
            <h1 className="hero-title">
                <span className="title-line title-white">Clean <span className="title-gray">Code.</span></span>
                <span className="title-line title-white">Modern Design.</span>
                <span className="title-line title-white"><span className="title-gray">Real</span> Impact.</span>
            </h1>
            <button className="hire-me-btn" onClick={() => setActiveSection('contact')}>
                Hire Me
            </button>
        </main>
    );
};

export default Hero;
