import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import HeroCarousel from '../components/HeroCarousel'
import { apartments } from '../data/apartments'

const Apartments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Carousel Section */}
      <div className="pt-20 -mt-20">
        <HeroCarousel />
      </div>
      
      {/* Section Title */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
              All <span className="text-gradient">Apartments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of premium apartments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment, index) => (
              <motion.div
                key={apartment.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={apartment.mainImage}
                    alt={apartment.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    {apartment.priceDisplay}/night
                  </div>

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {apartment.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-display group-hover:text-primary-600 transition-colors">
                    {apartment.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-bed text-primary-600"></i>
                      <span>{apartment.bedrooms} {apartment.bedrooms === 0 ? 'Studio' : 'Bed' + (apartment.bedrooms > 1 ? 's' : '')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-bath text-primary-600"></i>
                      <span>{apartment.bathrooms} Bath{apartment.bathrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-users text-primary-600"></i>
                      <span>Up to {apartment.guests}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {apartment.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {apartment.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/apartments/${apartment.slug}`}
                      className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                    >
                      View Details
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default Apartments

