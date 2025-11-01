import { contactData, socialLinks } from '../../data/contactData';
import SocialLink from '../shared/SocialLink';

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 animate-on-scroll">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-12 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          I'm always open to discussing new projects, opportunities, or just having a chat about technology!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Object.values(contactData).map((contact, idx) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 p-6 bg-gray-800 rounded-xl border-2 border-gray-700 ${contact.borderColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${contact.shadowColor} animate-on-scroll`}
              style={{ animationDelay: `${(idx + 2) * 0.1}s` }}
            >
              <div className={`flex-shrink-0 w-14 h-14 ${contact.bgColor} rounded-full flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${contact.iconColor}`} />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                <p className={`text-gray-300 ${contact.value.includes('@') ? 'text-sm break-all' : ''}`}>{contact.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="border-t border-gray-700 pt-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">Follow Me</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((social, idx) => (
            <SocialLink
              key={social.label}
              href={social.href}
              icon={social.icon}
              label={social.label}
              className={social.className}
              text={social.text}
              textColor={social.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

