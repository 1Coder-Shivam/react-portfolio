import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from '../cards/ExperienceCard';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Experience = () => (
  <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <motion.div 
        className="space-y-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experienceData.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Experience;
