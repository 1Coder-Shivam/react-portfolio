import { scrollToSection } from '../../utils/scrollUtils';

const Hero = () => (
  <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center w-full">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 animate-on-scroll">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 inline-block">Shivam</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 animate-on-scroll" style={{ animationDelay: '0.2s' }}>Full Stack Developer</h2>
          <p className="text-xl text-gray-400 leading-relaxed animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            Passionate Full Stack Developer who loves coding, adapts fast, and enjoys continuous learning in tech.
          </p>
          <div className="flex flex-wrap gap-4 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
            <a
              href="Shivam_Resume_01112025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-blue-600 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl shadow-blue-500/50 animate-pulse-glow">
              <img
                src="/photo.jpeg"
                alt="Shivam Kumar Maurya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-xl opacity-30 animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

