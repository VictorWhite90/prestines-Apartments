import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Apartments', path: '/apartments' },
      { name: 'Services', path: '/services' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      'Free Parking',
      'Group Bookings',
      'In-Room Dining',
      'Group Reservations',
      '24/7 Support',
    ],
    social: [
      { icon: 'fab fa-facebook', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-instagram', url: '#' },
      { icon: 'fab fa-linkedin', url: '#' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/6-5-e1626882432619.png"
              alt="Prestine Apartments"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Welcome to Prestine Apartments, where comfort meets convenience in
              the heart of Apo. Experience modern living redefined with
              thoughtfully designed spaces and exceptional service.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.icon}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex items-center gap-2"
                >
                  <i className="fas fa-check text-primary-400 text-xs"></i>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary-400 mt-1"></i>
                <span className="text-gray-400">
                  Plot 219, Apo Dutse, Apo, Abuja FCT, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary-400"></i>
                <a
                  href="tel:+2348029823593"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  (+234) 0802 982 3593
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary-400"></i>
                <a
                  href="mailto:Support@prestineapartment.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Support@prestineapartment.com
                </a>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8384986523947!2d7.4910934000000005!3d8.987004599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d2a678a79e3%3A0x1124c0d588f26144!2sPleasant%20Places%2CApo!5e0!3m2!1sen!2sng!4v1735572037165!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            Copyright © {currentYear}{' '}
            <span className="text-primary-400 font-semibold">
              Prestine Apartments
            </span>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

