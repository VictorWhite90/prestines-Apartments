import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Jane Pattrick',
      text: 'Amazing staff, superb food, outstanding services, and I felt at home. I could have stayed longer. I like the great services I got from the staff. I loved everything and felt at home. Food was superb as I did not expect such a great meal from a hotel. So, I will absolutely come back again.',
      rating: 5,
    },
    {
      name: 'Fred John',
      text: 'The location is fantastic; it\'s in the middle of everywhere. It\'s easily accessible and easy to describe to guests visiting. The complimentary breakfast is also a nice concept in addition to the self-serviced kitchen in the apartment.',
      rating: 5,
    },
    {
      name: 'Alex Miracle',
      text: 'Exceptional hospitality! The rooms were clean, spacious, and equipped with everything we needed. The staff were so friendly and made sure all our needs were met. Definitely coming back!',
      rating: 5,
    },
    {
      name: 'Daniel Princewill',
      text: 'Loved the vibe and atmosphere! The decor was modern, and the services were beyond my expectations. A perfect getaway destination. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Fortune Godsgift',
      text: 'Conveniently located, comfortable rooms, and outstanding customer care. The entire experience felt personalized and memorable. Kudos to the team!',
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            What Our <span className="text-primary-400">Guests Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences from our valued guests
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-yellow-400 text-xl"
                    ></i>
                  )
                )}
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400">Verified Guest</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-8 bg-primary-400'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

