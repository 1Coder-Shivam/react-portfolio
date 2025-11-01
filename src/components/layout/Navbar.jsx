import { Menu, X, Github, Linkedin } from 'lucide-react';
import NavLink from '../shared/NavLink';
import { scrollToSection } from '../../utils/scrollUtils';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['home', 'experience', 'projects', 'skills', 'contact'];

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, () => setIsMenuOpen(false));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shivam Kumar Maurya
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
              <NavLink
                key={item}
                href={item}
                activeSection={activeSection}
                onScrollToSection={handleScrollToSection}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
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
            {navItems.map(item => (
              <NavLink
                key={item}
                href={item}
                activeSection={activeSection}
                onScrollToSection={handleScrollToSection}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

