import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Cloud, Wrench, Youtube } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id || entry.target.className]));
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observerRef.current = observer;

    // Observe elements after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observerRef.current.unobserve(el));
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ href, children }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === href
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:text-white hover:bg-gray-800'
      }`}
    >
      {children}
    </button>
  );

  const SocialLink = ({ href, icon: Icon, label, className = "" }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-4 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12 ${className}`}
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shivam Kumar Maurya
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink href="home">Home</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="contact">Contact</NavLink>
              <a href="https://www.linkedin.com/in/shivamkrmaurya/" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/1Coder-Shivam" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <NavLink href="home">Home</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6 animate-on-scroll">
              <h1 className="text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 inline-block">Shivam</span>
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-300 animate-on-scroll" style={{ animationDelay: '0.2s' }}>Full Stack Developer</h2>
              <p className="text-xl text-gray-400 leading-relaxed animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                Passionate Full Stack Developer who loves coding, adapts fast, and enjoys continuous learning in tech.
              </p>
              <div className="flex flex-wrap gap-4 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
                <a
                  href="Shivam_Resume_01112025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  View Resume
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-blue-600 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl shadow-blue-500/50 animate-pulse-glow">
                  <img
                    src="/photo.jpeg"
                    alt="Shivam Kumar Maurya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-xl opacity-30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">Work Experience</h2>
          <div className="space-y-8">
            {/* Software Engineer - BNG */}
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-on-scroll hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Software Engineer</h3>
                  <p className="text-xl text-gray-300 mt-1">BNG Advanced Mobile Solutions Pvt Ltd</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>June 2025 - Present</p>
                  <p>Gurugram, Haryana</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Architected and deployed Digital Promotion Centralized System handling 1.5M daily transactions, integrating multiple campaign management tools with Java, Spring Boot, React, and Elasticsearch for real-time analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Developed AI-powered chat service (MAYA) using Spring Boot, React, and WebRTC, delivering faster response times and improved system efficiency for real-time customer conversations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Built scalable full-stack applications across Maya, IVA, and Digital Promotion systems, demonstrating versatility in delivering high-performance solutions across diverse product domains.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Optimized Elasticsearch workflows and implemented real-time monitoring dashboards using Kibana, enhancing system observability and performance tracking.</span>
                </li>
              </ul>
            </div>

            {/* Software Engineer I - Vamhi */}
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-on-scroll hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Software Engineer I</h3>
                  <p className="text-xl text-gray-300 mt-1">Vamhi Pvt. Ltd</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>January 2024 - June 2025</p>
                  <p>Noida, Uttar Pradesh</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Engineered enterprise-grade Atlassian plugins for Jira and Confluence using Java, Spring Framework, JavaScript, and Node.js, serving multiple client organizations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Developed Vamhi Labele (Colored Labels for Jira), Vamhi Analytics for JSM, and Vamhi Fill in the Blanks for both data-center and cloud platforms, enhancing task management and workflow efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Built robust backend services and APIs using Java and Spring Framework, integrated with PostgreSQL databases, and deployed through Jenkins CI/CD pipelines.</span>
                </li>
              </ul>
            </div>

            {/* Associate Software Engineer - Nagarro */}
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-on-scroll hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Associate Software Engineer</h3>
                  <p className="text-xl text-gray-300 mt-1">Nagarro</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>March 2023 - December 2023</p>
                  <p>Noida, Uttar Pradesh</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Contributed to Java Full Stack projects, designing and implementing solutions using Java, Spring Boot for backend services, and Angular/React for responsive frontend interfaces.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Built Product Review System with JWT authentication, Lombok, MapStruct, and JPA for MySQL integration, featuring Material UI and Bootstrap for enhanced user experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Developed Result Management System with secure authentication, enabling teachers to manage student data and implementing intuitive search functionality using Angular and Material design.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Promotion Centralized System */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-on-scroll">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Digital Promotion Centralized System</h3>
              <p className="text-gray-300 mb-4">
                Centralized digital promotional activities by integrating multiple campaign management tools, optimized workflows across advanced tech stack, and enhanced monitoring with real-time analytics dashboards.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'React', 'Angular', 'Spring Boot', 'Elastic', 'Kibana', 'Mongo'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/1Coder-Shivam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>

            {/* MAYA Hutch Sri Lanka */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">MAYA Hutch Sri Lanka</h3>
              <p className="text-gray-300 mb-4">
                Developed an AI chat service leveraging Spring Boot, React, and WebRTC for real-time AI-powered conversations.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'React', 'WebRTC', 'AI/ML'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/1Coder-Shivam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>

            {/* Vamhi Labele */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Vamhi Labele</h3>
              <p className="text-gray-300 mb-4">
                Contributed to the development of Vamhi Colored Labels for Jira, a Jira plugin designed to enhance task management by enabling users to assign colors to labels for better visual organization and prioritization. Key features include label permission control, centralized label management, and admin-specific access controls.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Framework', 'Atlassian SDK', 'JavaScript', 'jQuery', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://marketplace.atlassian.com/apps/1231706/vamhi-labele-colored-labels-for-jira?hosting=datacenter&tab=overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
                <a
                  href="https://github.com/1Coder-Shivam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>

            {/* Bhagavad Gita Explorer */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Bhagavad Gita Explorer</h3>
              <p className="text-gray-300 mb-4">
                A modern web application built with Next.js for exploring the Bhagavad Gita, featuring chapter-wise verses with Sanskrit text, transliterations, meanings, and detailed explanations.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Firebase', 'CSS Modules'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/1Coder-Shivam/bhagavad-gita-explorer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>

            {/* FAQ Chatbot App */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">FAQ Chatbot App</h3>
              <p className="text-gray-300 mb-4">
                A full-stack FAQ Chatbot application powered by Spring Boot backend and React frontend, delivering intelligent answers inspired by the Bhagavad Gita. Features intelligent FAQ search, real-time interaction, and security with JWT authentication and AES-encrypted nonces.
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'React', 'JWT', 'AES', 'REST API'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://heyparth.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
                <a
                  href="https://github.com/1Coder-Shivam/faq-chatbot-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-blue-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-400 animate-pulse" />
                <h3 className="text-xl font-bold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python'].map((skill, idx) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-blue-600 hover:scale-110 transition-all duration-200 cursor-default" style={{ transitionDelay: `${idx * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-green-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-green-400 animate-pulse" />
                <h3 className="text-xl font-bold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'RDS'].map((skill, idx) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-green-600 hover:scale-110 transition-all duration-200 cursor-default" style={{ transitionDelay: `${idx * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-purple-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-purple-400 animate-pulse" />
                <h3 className="text-xl font-bold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'React', 'Angular', 'jQuery', 'Apache Kafka'].map((skill, idx) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-purple-600 hover:scale-110 transition-all duration-200 cursor-default" style={{ transitionDelay: `${idx * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-yellow-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6 text-yellow-400 animate-pulse" />
                <h3 className="text-xl font-bold">Cloud Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-yellow-600 hover:scale-110 transition-all duration-200 cursor-default">AWS</span>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-orange-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-orange-400 animate-pulse" />
                <h3 className="text-xl font-bold">Web Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'JavaScript'].map((skill, idx) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-orange-600 hover:scale-110 transition-all duration-200 cursor-default" style={{ transitionDelay: `${idx * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-red-500 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-red-400 animate-pulse" />
                <h3 className="text-xl font-bold">Tools & Others</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Bitbucket', 'Jenkins', 'Gitlab', 'Postman', 'Atlassian', 'Jira', 'Confluence', 'Android', 'Selenium', 'Elastic Search'].map((skill, idx) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-red-600 hover:scale-110 transition-all duration-200 cursor-default" style={{ transitionDelay: `${idx * 0.03}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Certifications & Achievements</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Qualified GATE (CS/IT) - 2024</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Solved 500+ DSA Problems on GeeksforGeeks and LeetCode</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>B.Tech. (Computer Science & Engineering) - Moradabad Institute of Technology (8.29 CGPA)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 animate-on-scroll">Get In Touch</h2>
            <p className="text-xl text-gray-400 mb-12 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              I'm always open to discussing new projects, opportunities, or just having a chat about technology!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:6868shivamkumarmaurya@gmail.com"
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 animate-on-scroll"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-gray-300 text-sm break-all">6868shivamkumarmaurya@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/917394836868"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 animate-on-scroll"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-green-600/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400 mb-1">Phone / WhatsApp</p>
                <p className="text-gray-300">+91 7394836868</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shivamkrmaurya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 animate-on-scroll"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                <p className="text-gray-300 text-sm">Connect with me</p>
              </div>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">Follow Me</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <SocialLink
                href="https://www.linkedin.com/in/shivamkrmaurya/"
                icon={Linkedin}
                label="LinkedIn"
                className="hover:bg-blue-600"
              />
              <SocialLink
                href="https://github.com/1Coder-Shivam"
                icon={Github}
                label="GitHub"
                className="hover:bg-purple-600"
              />
              <SocialLink
                href="https://www.youtube.com/@ShivamKrMaurya"
                icon={Youtube}
                label="YouTube"
                className="hover:bg-red-600"
              />
              <a
                href="https://www.geeksforgeeks.org/user/6868shivamkumarmaurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:rotate-12 flex items-center justify-center min-w-[56px]"
                aria-label="GeeksforGeeks"
              >
                <span className="text-lg font-bold text-green-400">GFG</span>
              </a>
              <a
                href="https://leetcode.com/1Coder_skm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110 hover:rotate-12 flex items-center justify-center min-w-[56px]"
                aria-label="LeetCode"
              >
                <span className="text-lg font-bold text-orange-400">LC</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Shivam Kumar Maurya. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/shivamkrmaurya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/1Coder-Shivam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@ShivamKrMaurya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:6868shivamkumarmaurya@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}