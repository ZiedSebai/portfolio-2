import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="logo-section">
                <div className="logo">Zied.</div>
            </div>
            <div className="links-section">
                <ul className="nav-menu">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(link.id)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
