import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section section">
            <div className="section-content">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="info-items">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:ziedsebai20@gmail.com">ziedsebai20@gmail.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📱</span>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+21696198553">+216 96 198 553</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>Monastir Tunisia or remote</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                <a href="https://github.com/ZiedSebai" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                                <a href="https://linkedin.com/in/ziedsebai" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                                <a href="#" className="social-icon">Twitter</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-image-container">
                        <img src="/assets/contact-photo.jpg" alt="Contact Zied" className="contact-photo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
