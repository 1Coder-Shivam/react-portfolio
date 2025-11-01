import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const ExperienceCard = ({ experience }) => (
  <motion.div 
    className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <motion.h3 
          className="text-2xl font-bold text-blue-400"
          whileHover={{ scale: 1.05 }}
        >
          {experience.title}
        </motion.h3>
        <p className="text-xl text-gray-300 mt-1">{experience.company}</p>
      </div>
      <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
        <p>{experience.period}</p>
        <p>{experience.location}</p>
      </div>
    </div>
    <motion.ul 
      className="space-y-3 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      {experience.achievements.map((achievement, idx) => (
        <motion.li 
          key={idx} 
          className="flex items-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <span className="text-blue-400 mr-2">•</span>
          <span>{achievement}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

export default ExperienceCard;
