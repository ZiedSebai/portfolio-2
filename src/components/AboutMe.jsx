import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-section section">
            <div className="section-content">
                <div className="about-grid">
                    <div className="about-text">
                        <h1 className="about-name">ZIED SEBAI</h1>
                        <h2 className="about-title">Software Engineer</h2>
                        <p className="about-description">
                            Dedicated software developer with a strong focus on building efficient, user-friendly applications.
                            Known for adaptability, problem-solving, and delivering high-quality results across diverse projects.
                        </p>
                    </div>
                    <div className="about-image-container">
                        <img src="/assets/profile-photo.jpg" alt="Zied Sebai" className="profile-photo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
