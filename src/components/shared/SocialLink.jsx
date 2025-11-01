const SocialLink = ({ href, icon: Icon, label, className = "", text, textColor }) => {
  const baseClasses = "p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12 flex items-center justify-center min-w-[56px]";
  const combinedClasses = Icon 
    ? `${baseClasses} hover:bg-blue-600 ${className}`
    : `${baseClasses} ${className}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClasses}
      aria-label={label}
    >
      {Icon ? <Icon className="w-6 h-6" /> : <span className={`text-lg font-bold ${textColor || ''}`}>{text}</span>}
    </a>
  );
};

export default SocialLink;

