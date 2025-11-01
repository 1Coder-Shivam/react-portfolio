import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div 
      className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${skill.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-lg ${skill.shadowColor}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5,
        delay: parseFloat(skill.animationDelay) || 0
      }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Icon className={`w-6 h-6 ${skill.iconColor}`} />
        </motion.div>
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
            <motion.span 
              key={item} 
              className={`px-4 py-2 bg-gray-700 rounded-lg text-gray-300 ${hoverColor} transition-all duration-200 cursor-default`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {item}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillCard;
