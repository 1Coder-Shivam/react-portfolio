import { experienceData } from '../../data/experienceData';
import ExperienceCard from '../cards/ExperienceCard';

const Experience = () => (
  <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">Work Experience</h2>
      <div className="space-y-8">
        {experienceData.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

