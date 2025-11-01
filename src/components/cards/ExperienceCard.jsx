const ExperienceCard = ({ experience }) => (
  <div 
    className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-on-scroll hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
    style={{ animationDelay: experience.animationDelay }}
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 className="text-2xl font-bold text-blue-400">{experience.title}</h3>
        <p className="text-xl text-gray-300 mt-1">{experience.company}</p>
      </div>
      <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
        <p>{experience.period}</p>
        <p>{experience.location}</p>
      </div>
    </div>
    <ul className="space-y-3 text-gray-300">
      {experience.achievements.map((achievement, idx) => (
        <li key={idx} className="flex items-start">
          <span className="text-blue-400 mr-2">•</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;

