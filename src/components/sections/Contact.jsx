import { motion } from 'framer-motion';
import { contactData, socialLinks } from '../../data/contactData';
import SocialLink from '../shared/SocialLink';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm always open to discussing new projects, opportunities, or just having a chat about technology!
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Object.values(contactData).map((contact, idx) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 p-6 bg-gray-800 rounded-xl border-2 border-gray-700 ${contact.borderColor} transition-all duration-300 hover:shadow-xl ${contact.shadowColor}`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`flex-shrink-0 w-14 h-14 ${contact.bgColor} rounded-full flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className={`w-8 h-8 ${contact.iconColor}`} />
              </motion.div>
              <div className="text-left flex-1">
                <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                <p className={`text-gray-300 ${contact.value.includes('@') ? 'text-sm break-all' : ''}`}>{contact.value}</p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      <motion.div 
        className="border-t border-gray-700 pt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-center mb-8 text-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          Follow Me
        </motion.h3>
        <motion.div 
          className="flex justify-center gap-6 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, idx) => (
            <motion.div
              key={social.label}
              variants={cardVariants}
              whileHover={{ scale: 1.1, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialLink
                href={social.href}
                icon={social.icon}
                label={social.label}
                className={social.className}
                text={social.text}
                textColor={social.textColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
