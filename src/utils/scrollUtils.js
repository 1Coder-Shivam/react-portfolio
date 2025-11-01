export const scrollToSection = (sectionId, callback) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (callback) callback();
  }
};

