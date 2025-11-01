const NavLink = ({ href, children, activeSection, onScrollToSection }) => (
  <button
    onClick={() => onScrollToSection(href)}
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      activeSection === href
        ? 'bg-blue-600 text-white'
        : 'text-gray-300 hover:text-white hover:bg-gray-800'
    }`}
  >
    {children}
  </button>
);

export default NavLink;

