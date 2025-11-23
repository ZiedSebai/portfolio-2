import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern frameworks and best practices.',
            features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly']
        },
        {
            icon: '📱',
            title: 'Mobile Apps',
            description: 'Cross-platform mobile applications that deliver native-like experiences.',
            features: ['React Native', 'Progressive Web Apps', 'App Store Deployment']
        },
        {
            icon: '⚙️',
            title: 'API Development',
            description: 'Scalable backend services and RESTful APIs for your applications.',
            features: ['Database Design', 'Authentication', 'Cloud Integration']
        },
        {
            icon: '🚀',
            title: 'Consulting',
            description: 'Technical guidance and strategic planning for your digital projects.',
            features: ['Architecture Review', 'Code Quality', 'Best Practices']
        },
        {
            icon: '🔧',
            title: 'Maintenance',
            description: 'Ongoing support and updates to keep your applications running smoothly.',
            features: ['Bug Fixes', 'Updates', '24/7 Support']
        }
    ];

    return (
        <section className="services-section section">
            <div className="section-content">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>✓ {feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
