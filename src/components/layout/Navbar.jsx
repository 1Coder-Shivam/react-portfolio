import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import NavLink from '../shared/NavLink';
import { scrollToSection } from '../../utils/scrollUtils';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['home', 'experience', 'projects', 'skills', 'contact'];

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, () => setIsMenuOpen(false));
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3, staggerChildren: 0.05 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold text-lg">SM</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
              Shivam Kumar Maurya
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <NavLink
                  href={item}
                  activeSection={activeSection}
                  onScrollToSection={handleScrollToSection}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </motion.div>
            ))}
            
            <motion.div
              className="ml-4 flex items-center gap-3 border-l border-gray-700 pl-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/shivamkrmaurya/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative p-2 text-gray-300 hover:text-blue-400 transition-colors rounded-lg group"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
                <motion.div
                  className="absolute inset-0 bg-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
              
              <motion.a 
                href="https://github.com/1Coder-Shivam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative p-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg group"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
                <motion.div
                  className="absolute inset-0 bg-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white relative p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <motion.div
              className="absolute inset-0 bg-gray-800 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 space-y-2"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map(item => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                >
                  <NavLink
                    href={item}
                    activeSection={activeSection}
                    onScrollToSection={handleScrollToSection}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
