import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getApartmentBySlug } from '../data/apartments'

const Policy = () => {
  const { slug } = useParams()
  const apartment = slug ? getApartmentBySlug(slug) : null

  const policies = [
    'Check-out time is 12 noon prompt. Extension will attract the appropriate night rate.',
    'Booking is confirmed only when payment has been received by the Management and a Booking Confirmation Advice is sent.',
    'Refund of payment is made if booking is cancelled within 48 hours to check-in date.',
    'A valid means of identification is required to be presented on arrival for checking in.',
    'The apartment is provided with cooking and laundry appliances. Any special requests concerning laundry and cooking should be made in advance.',
    'Smoking is not allowed in the apartment or in any part of the facility.',
    'The occupant will not do anything that will create inconvenience to other apartment users.',
    'The occupant will not use the apartment for any illicit or illegal activities or any activity of a criminal nature. The Management of the apartment facility is under obligation to report any activity of a suspicious criminal nature to the security agencies.',
    'The facilities and appliances provided in the apartment are for use solely within the apartment.',
    'The facilities and appliances in the apartment are for the convenience and comfort of the occupant and are to be used responsibly and without damages to avoid a surcharge.',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center font-display">
              Booking Policies
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Welcome to Prestine Apartments. To ensure a comfortable and secure
              stay for all our guests, please take a moment to read through our
              policies before proceeding with your booking.
            </p>

            <div className="space-y-4 mb-8">
              {policies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-primary-600 font-bold flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-gray-700">{policy}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-8 rounded">
              <p className="text-gray-800 font-semibold">
                By proceeding with the booking, you accept the above policies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {apartment ? (
                <Link
                  to={`/apartments/${apartment.slug}`}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg text-center"
                >
                  Agree & Proceed to Booking
                </Link>
              ) : (
                <Link
                  to="/apartments"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg text-center"
                >
                  Agree & View Apartments
                </Link>
              )}
              <Link
                to="/"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Policy

