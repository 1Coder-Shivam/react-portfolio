const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  
  return (
    <div 
      className={`bg-gray-800 rounded-xl p-6 border border-gray-700 animate-on-scroll ${skill.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-lg ${skill.shadowColor}`}
      style={{ animationDelay: skill.animationDelay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 ${skill.iconColor} animate-pulse`} />
        <h3 className="text-xl font-bold">{skill.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.skills.map((item, idx) => {
          const hoverColor = skill.borderColor.includes('blue') ? 'hover:bg-blue-600' :
                           skill.borderColor.includes('green') ? 'hover:bg-green-600' :
                           skill.borderColor.includes('purple') ? 'hover:bg-purple-600' :
                           skill.borderColor.includes('yellow') ? 'hover:bg-yellow-600' :
                           skill.borderColor.includes('orange') ? 'hover:bg-orange-600' :
                           'hover:bg-red-600';
          
          return (
            <span 
              key={item} 
              className={`px-4 py-2 bg-gray-700 rounded-lg text-gray-300 ${hoverColor} hover:scale-110 transition-all duration-200 cursor-default`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;

