import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import TechStackBadge from '../shared/TechStackBadge';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ProjectCard = ({ project, index = 0 }) => (
  <motion.div 
    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    custom={index}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.h3 
      className="text-2xl font-bold text-blue-400 mb-3"
      whileHover={{ scale: 1.05 }}
    >
      {project.title}
    </motion.h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="mb-4">
      <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {project.techStack.map((tech, idx) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            <TechStackBadge tech={tech} />
          </motion.div>
        ))}
      </motion.div>
    </div>
    {(project.links.github || project.links.live) && (
      <div className="flex gap-3">
        {project.links.live && (
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </motion.a>
        )}
        {project.links.github && (
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            View Code
          </motion.a>
        )}
      </div>
    )}
  </motion.div>
);

export default ProjectCard;
