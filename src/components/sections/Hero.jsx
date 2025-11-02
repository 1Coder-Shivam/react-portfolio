import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';
import ResumeModal from '../shared/ResumeModal';
import FloatingDroplets from '../shared/FloatingDroplets';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center w-full overflow-hidden">
        <FloatingDroplets />
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold"
                variants={fadeInLeft}
              >
                Hi, I'm <motion.span 
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  Shivam
                </motion.span>
              </motion.h1>
              <motion.h2 
                className="text-3xl md:text-4xl text-gray-300"
                variants={fadeInUp}
              >
                Full Stack Developer
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-400 leading-relaxed"
                variants={fadeInUp}
              >
                Passionate Full Stack Developer who loves coding, adapts fast, and enjoys continuous learning in tech.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    View Resume
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    initial={false}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 border-2 border-blue-600 hover:border-purple-600 rounded-lg font-medium text-white transition-all duration-300 overflow-hidden bg-gray-900/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </span>
                  
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    initial={false}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {/* Pulsing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -20, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8, type: "spring", stiffness: 200 },
                  rotate: { duration: 0.8 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.08,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl shadow-blue-500/50 relative z-10"
                  whileHover={{ 
                    borderColor: "#a855f7",
                    boxShadow: "0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="/photo.jpeg"
                    alt="Shivam Kumar Maurya"
                    className="w-full h-full object-cover"
                    style={{ willChange: 'transform' }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Animated background orbs */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 z-0"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-xl opacity-30 z-0"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -8, 0],
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-lg opacity-40 z-0"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.7, 0.4],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
};

export default Hero;
