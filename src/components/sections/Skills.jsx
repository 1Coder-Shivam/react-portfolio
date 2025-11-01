import { skillsData, certifications } from '../../data/skillsData';
import SkillCard from '../cards/SkillCard';

const Skills = () => (
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center animate-on-scroll">My Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-12 bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Certifications & Achievements</h3>
        <ul className="space-y-2 text-gray-300">
          {certifications.map((cert, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;

