import { Linkedin, Github, Youtube, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">© 2025 Shivam Kumar Maurya. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/shivamkrmaurya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/1Coder-Shivam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@ShivamKrMaurya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="mailto:6868shivamkumarmaurya@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

