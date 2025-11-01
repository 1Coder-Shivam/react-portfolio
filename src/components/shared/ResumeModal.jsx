import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const RESUME_DRIVE_ID = '1qhNTqk-6I0Gke2FLTd92L-SXhhAtklnJ';
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_ID}/preview`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_ID}`;
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_ID}/view?usp=drive_link`;

const ResumeModal = ({ isOpen, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
                
                <div className="p-4 bg-gray-800 border-b border-gray-700">
                  <h2 className="text-2xl font-bold text-white">Shivam Kumar Maurya - Resume</h2>
                  <p className="text-gray-400 text-sm mt-1">View or download my resume</p>
                </div>
                
                <div className="h-[calc(90vh-100px)] overflow-auto bg-gray-800">
                  <iframe
                    src={RESUME_PREVIEW_URL}
                    className="w-full h-full border-0 min-h-[600px]"
                    title="Resume PDF"
                    allow="autoplay"
                  />
                </div>
                
                <div className="p-4 bg-gray-800 border-t border-gray-700 flex gap-3 justify-end flex-wrap">
                  <motion.a
                    href={RESUME_DOWNLOAD_URL}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Download PDF
                  </motion.a>
                  <motion.a
                    href={RESUME_VIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Google Drive
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
