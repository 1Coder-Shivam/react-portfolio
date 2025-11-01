import { motion } from 'framer-motion';

const NavLink = ({ href, children, activeSection, onScrollToSection }) => {
  const isActive = activeSection === href;

  return (
    <motion.button
      onClick={() => onScrollToSection(href)}
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden group`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
    >
      {/* Background gradient on active */}
      {isActive ? (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
          layoutId="activeNav"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Text */}
      <span className={`relative z-10 font-medium transition-colors duration-300 ${
        isActive 
          ? 'text-white' 
          : 'text-gray-300 group-hover:text-white'
      }`}>
        {children}
      </span>
      
      {/* Underline effect on hover */}
      {!isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      )}
      
      {/* Glow effect */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-50 blur-xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
};

export default NavLink;
