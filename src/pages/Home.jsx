import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import ApartmentCard from '../components/ApartmentCard'
import FeaturesSection from '../components/FeaturesSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollToTop from '../components/ScrollToTop'
import { apartments } from '../data/apartments'

const Home = () => {
  // Show all 4 apartments on homepage
  const featuredApartments = apartments.map(apt => ({
    name: apt.name,
    image: apt.mainImage,
    price: `${apt.priceDisplay}/night`,
    bedrooms: apt.bedrooms,
    bathrooms: apt.bathrooms,
    guests: apt.guests,
    features: apt.features.slice(0, 4),
    link: `/apartments/${apt.slug}`,
  }))

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Apartments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
              Our <span className="text-gradient">Apartments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your perfect home away from home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredApartments.map((apartment, index) => (
              <ApartmentCard
                key={index}
                apartment={apartment}
                index={index}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/apartments"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              View All Apartments
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default Home

