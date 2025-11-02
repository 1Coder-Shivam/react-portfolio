export const scrollToSection = (sectionId, callback) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the navbar height (fixed at 64px or 4rem)
    const navbarHeight = 64;
    
    // Get element's position relative to the document
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Delay callback to ensure scroll starts before menu closes (especially important on mobile)
    if (callback) {
      setTimeout(callback, 300);
    }
  }
};

