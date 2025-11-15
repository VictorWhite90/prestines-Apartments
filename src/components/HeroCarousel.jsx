import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/images/delux-outsideview.jpg',
      title: 'Luxury Redefined',
      description:
        'Experience unparalleled comfort in our Deluxe Royale apartments. Spacious 4-bedroom units designed for modern living, featuring premium finishes and breathtaking views of Abuja.',
      direction: 'right', // fade in from right
    },
    {
      image: '/images/prestineAprtoutside2.jpg',
      title: 'Modern Elegance',
      description:
        'Discover contemporary living spaces that blend style with functionality. Our Premium apartments offer sophisticated design, state-of-the-art amenities, and a perfect location in the heart of Apo.',
      direction: 'left', // fade in from left
    },
    {
      image: '/images/prestineAprtBedroom2.jpg',
      title: 'Tranquil Retreat',
      description:
        'Unwind in our thoughtfully designed bedrooms, where comfort meets luxury. Each space is crafted to provide the perfect sanctuary after a long day, with premium bedding and serene ambiance.',
      direction: 'top', // fade in from top
    },
    {
      image: '/images/prestineAprtLivingRoom.jpg',
      title: 'Spacious Living',
      description:
        'Entertain and relax in our expansive living areas, designed for both intimate gatherings and grand celebrations. Open-concept layouts with natural light and premium furnishings create the perfect atmosphere.',
      direction: 'bottom', // fade in from bottom
    },
    {
      image: '/images/1room.aprt.inner.jpg',
      title: 'Cozy Comfort',
      description:
        'Perfect for solo travelers or couples, our Classic Studio apartments offer everything you need in a compact, beautifully designed space. Modern amenities and thoughtful layouts maximize every square foot.',
      direction: 'right', // fade in from right (continuing rotation)
    },
    {
      image: '/images/prestineAprtFrontdesk.jpg',
      title: 'Exceptional Service',
      description:
        'Our dedicated team ensures your stay is nothing short of perfect. From the moment you arrive at our welcoming front desk, experience hospitality that exceeds expectations.',
      direction: 'left', // fade in from left
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const getAnimationVariants = (direction) => {
    const variants = {
      right: {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      },
      left: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
      },
      top: {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
      },
      bottom: {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
      },
    }
    return variants[direction] || variants.right
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]
  const animationVariants = getAnimationVariants(currentSlideData.direction)

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlideData.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={animationVariants.initial}
                animate={animationVariants.animate}
                exit={animationVariants.exit}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-white"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl md:text-7xl font-bold mb-6 font-display text-white drop-shadow-2xl"
                  style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}
                >
                  {currentSlideData.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl mb-8 leading-relaxed text-white drop-shadow-lg"
                  style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}
                >
                  {currentSlideData.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/apartments"
                      className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-xl"
                    >
                      Explore Apartments
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="#"
                      className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/50 hover:bg-white/30 transition-colors shadow-lg"
                    >
                      View Gallery
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-xl"></i>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-xl"></i>
      </button>
    </div>
  )
}

export default HeroCarousel

