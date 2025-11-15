import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import BookingForm from '../components/BookingForm'
import { getApartmentBySlug, apartments } from '../data/apartments'

const ApartmentDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const apartment = getApartmentBySlug(slug)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Apartment Not Found</h1>
          <Link to="/apartments" className="text-primary-600 hover:underline">
            Back to Apartments
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Image Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Link
              to="/apartments"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i>
              <span>Back to Apartments</span>
            </Link>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-6 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImageIndex}
                src={apartment.images[selectedImageIndex]}
                alt={apartment.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {/* Image Navigation */}
            {apartment.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      (prev) => (prev - 1 + apartment.images.length) % apartment.images.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors"
                >
                  <i className="fas fa-chevron-left text-gray-800"></i>
                </button>
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) => (prev + 1) % apartment.images.length)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors"
                >
                  <i className="fas fa-chevron-right text-gray-800"></i>
                </button>
              </>
            )}

            {/* Price Badge */}
            <div className="absolute bottom-4 right-4 bg-primary-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-xl">
              {apartment.priceDisplay}/night
            </div>
          </motion.div>

          {/* Thumbnail Images */}
          {apartment.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {apartment.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-primary-600 ring-2 ring-primary-300'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${apartment.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                  {apartment.name}
                </h1>
                <div className="flex items-center gap-4 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-primary-600"></i>
                    <span>{apartment.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-bed text-primary-600"></i>
                    <span>{apartment.bedrooms} {apartment.bedrooms === 0 ? 'Studio' : 'Bedroom' + (apartment.bedrooms > 1 ? 's' : '')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-users text-primary-600"></i>
                    <span>Up to {apartment.guests} Guests</span>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {apartment.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {apartment.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <i className="fas fa-check-circle text-primary-600"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                  <div className="flex flex-wrap gap-3">
                    {apartment.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-24"
              >
                <BookingForm
                  apartmentName={apartment.name}
                  apartmentPrice={apartment.price}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default ApartmentDetail

