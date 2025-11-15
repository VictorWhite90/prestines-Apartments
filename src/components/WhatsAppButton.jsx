import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/+2348029823593"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </motion.a>
  )
}

export default WhatsAppButton

