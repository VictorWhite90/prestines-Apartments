import { motion } from 'framer-motion'
import { useState } from 'react'

const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              More About <span className="text-gradient">Us</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Welcome to Prestine Apartments, where comfort meets convenience
                in the heart of Apo. Located just minutes away from the bustling
                Shoprite Apo, our apartments offer the perfect blend of modern
                living and easy access to the city's top attractions.
              </p>
              <p>
                From cozy studio apartments to spacious three-bedroom units, each
                space is thoughtfully designed with high-quality finishes,
                contemporary amenities, and a focus on functionality.
              </p>
              <p>
                Our prime location ensures that you're always connected to the
                best the city has to offer. Experience modern living redefined at
                Prestine Apartments. Welcome home!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Book an Apartment Now
            </motion.button>
          </motion.div>

          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {!isVideoPlaying ? (
              <>
                <img
                  src="/images/Apo-1.jpeg"
                  alt="Prestine Apartments Building"
                  className="w-full h-full object-cover"
                />
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <i className="fas fa-play text-primary-600 text-2xl ml-1"></i>
                  </div>
                </motion.button>
              </>
            ) : (
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
                src="/videos/WhatsApp Video 2024-12-10 at 09.29.56_8bbb8fa9.mp4"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

