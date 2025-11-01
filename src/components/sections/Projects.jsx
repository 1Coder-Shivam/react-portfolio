import { projectsData } from '../../data/projectsData';
import ProjectCard from '../cards/ProjectCard';

const Projects = () => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

