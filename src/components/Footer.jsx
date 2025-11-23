import './Footer.css';

const Footer = ({ activeSection }) => {
    const pageInfo = {
        home: { label: 'HOME PAGE', number: '01' },
        about: { label: 'ABOUT ME', number: '02' },
        services: { label: 'SERVICES', number: '03' },
        portfolio: { label: 'PORTFOLIO', number: '04' },
        contact: { label: 'CONTACT', number: '05' }
    };

    const currentInfo = pageInfo[activeSection] || pageInfo.home;

    return (
        <footer className="footer">
            <span className="page-label">{currentInfo.label}</span>
            <span className="page-number">{currentInfo.number}</span>
        </footer>
    );
};

export default Footer;
