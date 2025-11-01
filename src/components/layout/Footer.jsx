import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/shivamkrmaurya/',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
      hoverBg: 'hover:bg-blue-600/20'
    },
    {
      href: 'https://github.com/1Coder-Shivam',
      icon: Github,
      label: 'GitHub',
      color: 'hover:text-purple-400',
      hoverBg: 'hover:bg-purple-600/20'
    },
    {
      href: 'https://www.youtube.com/@ShivamKrMaurya',
      icon: Youtube,
      label: 'YouTube',
      color: 'hover:text-red-400',
      hoverBg: 'hover:bg-red-600/20'
    },
    {
      href: 'mailto:6868shivamkumarmaurya@gmail.com',
      icon: Mail,
      label: 'Email',
      color: 'hover:text-blue-400',
      hoverBg: 'hover:bg-blue-600/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 opacity-50" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Copyright Section */}
          <motion.div
            className="flex items-center gap-2 text-gray-400"
            variants={itemVariants}
          >
            <span>© {currentYear}</span>
            <motion.span
              className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Shivam Kumar Maurya
            </motion.span>
            <span>All rights reserved.</span>
            <motion.span
              className="text-red-500 inline-flex items-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 fill-red-500" />
            </motion.span>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            className="flex gap-3 items-center"
            variants={itemVariants}
          >
            <span className="text-gray-500 text-sm mr-1 hidden md:block">Connect with me:</span>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`relative p-3 rounded-lg text-gray-400 ${social.color} ${social.hoverBg} transition-all duration-300 group`}
                    whileHover={{ scale: 1.15, y: -3, rotate: [0, -10, 10, -10, 0] }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                    
                    {/* Tooltip */}
                    <motion.span
                      className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gray-700"
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.label}
                    </motion.span>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: social.color.includes('blue') 
                          ? '0 0 20px rgba(59, 130, 246, 0.5)' 
                          : social.color.includes('purple')
                          ? '0 0 20px rgba(168, 85, 247, 0.5)'
                          : social.color.includes('red')
                          ? '0 0 20px rgba(239, 68, 68, 0.5)'
                          : '0 0 20px rgba(59, 130, 246, 0.5)'
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
