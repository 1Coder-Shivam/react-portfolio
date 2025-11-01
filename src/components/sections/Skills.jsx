import { motion } from 'framer-motion';
import { skillsData, certifications } from '../../data/skillsData';
import SkillCard from '../cards/SkillCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Skills = () => (
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div 
        className="mt-12 bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <motion.h3 
          className="text-2xl font-bold mb-4 text-blue-400"
          whileHover={{ scale: 1.05 }}
        >
          Certifications & Achievements
        </motion.h3>
        <ul className="space-y-2 text-gray-300">
          {certifications.map((cert, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-blue-400 mr-2">•</span>
              <span>{cert}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Skills;
