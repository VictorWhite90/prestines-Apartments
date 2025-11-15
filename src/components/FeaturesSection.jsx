import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-parking',
      title: 'Free Parking',
      description: 'Complimentary parking space for all guests',
    },
    {
      icon: 'fas fa-users',
      title: 'Group Bookings',
      description: 'Perfect for family gatherings and group stays',
    },
    {
      icon: 'fas fa-utensils',
      title: 'In-Room Dining',
      description: 'Delicious meals delivered to your apartment',
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Easy Reservations',
      description: 'Simple and quick booking process',
    },
    {
      icon: 'fas fa-shield-alt',
      title: '24/7 Security',
      description: 'Secure and safe environment for all guests',
    },
    {
      icon: 'fas fa-wifi',
      title: 'High-Speed WiFi',
      description: 'Free high-speed internet throughout',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Premium <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-primary-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

