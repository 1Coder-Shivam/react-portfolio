import { Github, ExternalLink } from 'lucide-react';
import TechStackBadge from '../shared/TechStackBadge';

const ProjectCard = ({ project }) => (
  <div 
    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-on-scroll"
    style={{ animationDelay: project.animationDelay }}
  >
    <h3 className="text-2xl font-bold text-blue-400 mb-3">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="mb-4">
      <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map(tech => (
          <TechStackBadge key={tech} tech={tech} />
        ))}
      </div>
    </div>
    {(project.links.github || project.links.live) && (
      <div className="flex gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        )}
      </div>
    )}
  </div>
);

export default ProjectCard;

