import { useState, useEffect } from 'react'

const BookingForm = ({ apartmentName, apartmentPrice }) => {
  const [formData, setFormData] = useState({
    title: '',
    first_name: '',
    last_name: '',
    user_email: '',
    user_phone: '',
    checkin_date: '',
    checkout_date: '',
    guest_number: '',
  })
  const [priceDisplay, setPriceDisplay] = useState('₦0.00')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailjsReady, setEmailjsReady] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    // Check if EmailJS is already loaded
    if (window.emailjs) {
      window.emailjs.init('2ZNOdi6QPItTHItBO')
      setEmailjsReady(true)
      return
    }

    // Load EmailJS script
    const script = document.createElement('script')
    script.src = 'https://cdn.emailjs.com/dist/email.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('2ZNOdi6QPItTHItBO')
        setEmailjsReady(true)
      }
    }

    return () => {
      // Don't remove script on unmount to keep it available
    }
  }, [])

  // Function to format numbers with commas
  const formatNumberWithCommas = (amount) => {
    return amount.toLocaleString(undefined, { minimumFractionDigits: 2 })
  }

  // Update price based on check-in and check-out dates
  useEffect(() => {
    const checkinDate = formData.checkin_date
    const checkoutDate = formData.checkout_date
    const roomRate = apartmentPrice || 0

    if (!checkinDate || !checkoutDate || !roomRate) {
      setPriceDisplay('₦0.00')
      return
    }

    const checkin = new Date(checkinDate)
    const checkout = new Date(checkoutDate)
    const totalNights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24))

    if (isNaN(totalNights) || totalNights <= 0) {
      setPriceDisplay('₦0.00')
      return
    }

    const subtotal = totalNights * roomRate
    setPriceDisplay(`₦${formatNumberWithCommas(subtotal)}`)
  }, [formData.checkin_date, formData.checkout_date, apartmentPrice])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!emailjsReady) {
      alert('Please wait, form is still loading...')
      return
    }
    
    setIsSubmitting(true)

    const checkinDate = formData.checkin_date
    const checkoutDate = formData.checkout_date
    const totalNights = Math.max(
      1,
      parseInt((new Date(checkoutDate) - new Date(checkinDate)) / (1000 * 60 * 60 * 24))
    )

    if (!checkinDate || !checkoutDate || totalNights <= 0) {
      alert('Invalid check-in or check-out dates.')
      setIsSubmitting(false)
      return
    }

    // Calculate pricing
    const displayedSubtotal = priceDisplay.replace(/₦|,/g, '').trim()
    const subtotal = parseFloat(displayedSubtotal) || 0
    const vatAmount = subtotal * 0.075
    const serviceCharge = subtotal * 0.1
    const grandTotal = subtotal + vatAmount + serviceCharge

    // Create form element for EmailJS
    const form = e.target
    const hiddenRoomRate = document.createElement('input')
    hiddenRoomRate.type = 'hidden'
    hiddenRoomRate.name = 'room_rate'
    hiddenRoomRate.value = apartmentPrice || 0
    form.appendChild(hiddenRoomRate)

    const hiddenVAT = document.createElement('input')
    hiddenVAT.type = 'hidden'
    hiddenVAT.name = 'vat_amount'
    hiddenVAT.id = 'hiddenVAT'
    hiddenVAT.value = formatNumberWithCommas(vatAmount)
    form.appendChild(hiddenVAT)

    const hiddenServiceCharge = document.createElement('input')
    hiddenServiceCharge.type = 'hidden'
    hiddenServiceCharge.name = 'service_charge'
    hiddenServiceCharge.id = 'hiddenServiceCharge'
    hiddenServiceCharge.value = formatNumberWithCommas(serviceCharge)
    form.appendChild(hiddenServiceCharge)

    const hiddenGrandTotal = document.createElement('input')
    hiddenGrandTotal.type = 'hidden'
    hiddenGrandTotal.name = 'grand_total'
    hiddenGrandTotal.id = 'hiddenGrandTotal'
    hiddenGrandTotal.value = formatNumberWithCommas(grandTotal)
    form.appendChild(hiddenGrandTotal)

    const hiddenApartmentName = document.createElement('input')
    hiddenApartmentName.type = 'hidden'
    hiddenApartmentName.name = 'apartment_name'
    hiddenApartmentName.id = 'apartmentName'
    hiddenApartmentName.value = apartmentName || ''
    form.appendChild(hiddenApartmentName)

    const hiddenSubtotal = document.createElement('input')
    hiddenSubtotal.type = 'hidden'
    hiddenSubtotal.name = 'subtotal'
    hiddenSubtotal.id = 'hiddensubtotal'
    hiddenSubtotal.value = formatNumberWithCommas(subtotal)
    form.appendChild(hiddenSubtotal)

    const hiddenTotalNights = document.createElement('input')
    hiddenTotalNights.type = 'hidden'
    hiddenTotalNights.name = 'total_nights'
    hiddenTotalNights.id = 'hiddenTotalNights'
    hiddenTotalNights.value = totalNights
    form.appendChild(hiddenTotalNights)

    // Add title field
    const titleInput = document.createElement('input')
    titleInput.type = 'hidden'
    titleInput.name = 'user_title'
    titleInput.value = formData.title
    form.appendChild(titleInput)

    console.log('Sending EmailJS Template Params:', {
      user_title: formData.title,
      first_name: formData.first_name,
      last_name: formData.last_name,
      user_email: formData.user_email,
      user_phone: formData.user_phone,
      checkin_date: checkinDate,
      checkout_date: checkoutDate,
      guest_number: formData.guest_number,
      apartment_name: apartmentName,
      subtotal: `₦${formatNumberWithCommas(subtotal)}`,
      vat_amount: `₦${formatNumberWithCommas(vatAmount)}`,
      service_charge: `₦${formatNumberWithCommas(serviceCharge)}`,
      grand_total: `₦${formatNumberWithCommas(grandTotal)}`,
      total_nights: totalNights,
    })

    try {
      // Send to Client
      await window.emailjs.sendForm('service_p6y1fke', 'template_vvm744y', form)
      console.log('Client Email Sent')

      // Send to Company
      await window.emailjs.sendForm('service_p6y1fke', 'template_iyygb2u', form)
      console.log('Company Email Sent')

      // Redirect to confirmation
      window.location.href = '/confirmation'
    } catch (error) {
      console.error('Email Error', error)
      alert('Failed to send booking request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate totals for display
  const displayedSubtotal = priceDisplay.replace(/₦|,/g, '').trim()
  const subtotal = parseFloat(displayedSubtotal) || 0
  const vatAmount = subtotal * 0.075
  const serviceCharge = subtotal * 0.1
  const grandTotal = subtotal + vatAmount + serviceCharge

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Apartment</h3>

      <form id="reservationForm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <select
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="" disabled>
              Select Title
            </option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">
            Check-In Date
          </label>
          <input
            type="date"
            id="checkin"
            name="checkin_date"
            value={formData.checkin_date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">
            Check-Out Date
          </label>
          <input
            type="date"
            id="checkout"
            name="checkout_date"
            value={formData.checkout_date}
            onChange={handleChange}
            required
            min={formData.checkin_date || new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guest_number"
            value={formData.guest_number}
            onChange={handleChange}
            placeholder="Enter number of guests"
            required
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Price Summary */}
        {subtotal > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">{priceDisplay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT (7.5%):</span>
                <span className="font-semibold">
                  ₦{formatNumberWithCommas(vatAmount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Charge (10%):</span>
                <span className="font-semibold">
                  ₦{formatNumberWithCommas(serviceCharge)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300">
                <span className="font-bold text-lg">Grand Total:</span>
                <span className="font-bold text-lg text-primary-600">
                  ₦{formatNumberWithCommas(grandTotal)}
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !emailjsReady}
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : !emailjsReady ? 'Loading...' : 'Submit Reservation'}
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to our{' '}
          <a href="/policy" className="text-primary-600 hover:underline">
            Booking Policies
          </a>
        </p>
      </form>
    </div>
  )
}

export default BookingForm

