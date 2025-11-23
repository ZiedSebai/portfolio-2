import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "TrendyShop – Full-Stack E-Commerce Web App",
            description: "TrendyShop is a modern, full-stack e-commerce web application designed for seamless and secure online shopping. It features a responsive React frontend, a NestJS backend, Stripe integration for payments, Cloudinary for image uploads, and JWT authentication for secure access.",
            image: "/assets/trendyshop.png",
            tags: ["React.js", "Node.js", "Nest.js", "MongoDB", "Cloudinary", "Stripe", "REST API"],
            demoUrl: "https://trendy-shop-lu5s.vercel.app/",
            githubUrl: "https://github.com/ZiedSebai/TrendyShop",
        },
        {
            title: "FinTrack+ – Personal Finance Dashboard",
            description: "Developed a full-stack finance dashboard with authentication, portfolio tracking, expense management, and data visualization. Integrated live market data from external APIs and built interactive charts for a clear view of spending and investments.",
            image: "/assets/fintrack.png",
            tags: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "REST API"],
            demoUrl: "https://github.com/ZiedSebai/FinTrack",
            githubUrl: "https://github.com/ZiedSebai/FinTrack",
        },
        {
            title: "QuickMaster – AI-Powered Quiz Generator",
            description: "A web application that allows users to create, customize, and play AI-generated quizzes on any topic.",
            image: "/assets/quiz-master.png",
            tags: ["React", "Node.js", "Express.js", "AI"],
            demoUrl: "https://github.com/ZiedSebai/QuizMaster",
            githubUrl: "https://quiz-master-app-nine.vercel.app/",
        },
        {
            title: "Merch Website",
            description: "A responsive merchandise and clothing website built using HTML5, CSS3, and jQuery. It features a clean layout, product showcases, and interactive elements like sliders and modals, all without using modern frameworks.",
            image: "/assets/merch-site.png",
            tags: ["HTML5", "CSS3", "jQuery", "Responsive Design"],
            demoUrl: "https://merchwebsite.netlify.app/",
            githubUrl: "https://github.com/ZiedSebai/MerchWebsite",
        },
        {
            title: "Vue Chess Game",
            description: "A chess game built with Vue using the Composition API, featuring move highlighting, checkmate detection, and turn-based play. Designed with a modular, scalable codebase and plans for future enhancements like en passant and pawn promotion.",
            image: "/assets/chessgame.png",
            tags: ["Vue.js", "CSS3", "Composition API"],
            demoUrl: "https://chessvuegame.netlify.app/",
            githubUrl: "https://github.com/ZiedSebai/vue-chess-game",
        },
        {
            title: "Real-Time Random Chat Web Application",
            description: "Built a real-time random chat app with Node.js, Express, and Socket.io, featuring user matching based on shared interests and reliable socket communication.",
            image: "/assets/randomchat.png",
            tags: ["Node.js", "Express.js", "Socket.io", "HTML5", "CSS3"],
            demoUrl: "https://github.com/ZiedSebai/RandomChat",
            githubUrl: "https://github.com/ZiedSebai/RandomChat",
        },
        {
            title: "DogTok – Infinite Dog Media Feed",
            description: "Created a scrollable web app that streams endless dog images and videos using the Dog CEO API, featuring smooth infinite scroll, responsive layout, and a playful TikTok-inspired experience.",
            image: "/assets/dogtok.gif",
            tags: ["React", "Vite", "JavaScript", "REST API", "CSS3"],
            demoUrl: "https://github.com/ZiedSebai/guess-dog-breed",
            githubUrl: "https://github.com/ZiedSebai/DogTok",
        },
        {
            title: "Guess the Dog Breed",
            description: "Built an interactive quiz game with React and the Dog CEO API, where users test their knowledge by guessing dog breeds from random images, track their score, and enjoy a playful, responsive UI.",
            image: "/assets/guessdogbreed.png",
            tags: ["React", "Vite", "JavaScript", "REST API", "CSS3"],
            demoUrl: "https://guess-dog-breed.vercel.app/",
            githubUrl: "https://github.com/ZiedSebai/guess-dog-breed",
        }
    ];

    return (
        <section className="portfolio-section section">
            <div className="section-content">
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-card">
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="portfolio-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-tags">
                                    {project.tags.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                                        Live Demo
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
