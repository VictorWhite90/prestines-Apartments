import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ApartmentCard = ({ apartment, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <motion.img
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
          {apartment.price}
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
            <span>{apartment.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-bath text-primary-600"></i>
            <span>{apartment.bathrooms} Bathrooms</span>
          </div>
          {apartment.guests && (
            <div className="flex items-center gap-2">
              <i className="fas fa-users text-primary-600"></i>
              <span>Up to {apartment.guests} Guests</span>
            </div>
          )}
        </div>

        {apartment.features && (
          <ul className="mb-4 space-y-2">
            {apartment.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                <i className="fas fa-check-circle text-primary-600 text-xs"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={apartment.link || '#'}
            className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ApartmentCard

