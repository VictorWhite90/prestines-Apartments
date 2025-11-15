# Prestine Apartment

A modern, responsive web application for showcasing and booking premium apartments in Abuja, Nigeria. Built with React and featuring smooth animations, beautiful UI, and an intuitive user experience.

## 🏠 Features

- **Apartment Listings**: Browse through 4 premium apartment options
- **Detailed Views**: Comprehensive apartment details with image galleries
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Interactive Carousel**: Hero carousel showcasing apartment highlights
- **WhatsApp Integration**: Direct contact via WhatsApp button
- **Modern UI**: Clean, elegant design with Tailwind CSS

## 🏢 Available Apartments

1. **Deluxe Royale 4-Bedroom Apartment - Apo**
   - Price: ₦280,000/night
   - 4 bedrooms, 3 bathrooms
   - Accommodates up to 8 guests

2. **Premium Royale 1-Bedroom Apartment - Apo**
   - Price: ₦85,000/night
   - 1 bedroom, 1 bathroom
   - Accommodates up to 2 guests

3. **Prestige Suite 2-Bedroom Apartment with BQ - Lugbe**
   - Price: ₦78,000/night
   - 2 bedrooms, 2 bathrooms
   - Accommodates up to 4 guests
   - Includes Boys Quarters

4. **Classic Studio Apartment - Apo**
   - Price: ₦75,000/night
   - Studio layout, 1 bathroom
   - Accommodates up to 2 guests

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **Font Awesome** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**

## 🚀 Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "C:\Users\Victor\Desktop\Prestine Apartment"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   If you encounter PowerShell execution policy issues on Windows, you can use:
   ```bash
   cmd /c npm install
   ```

## 💻 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🏗️ Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
Prestine Apartment/
├── public/
│   ├── images/          # Apartment images
│   └── videos/          # Video assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroCarousel.jsx
│   │   ├── ApartmentCard.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Apartments.jsx
│   │   ├── ApartmentDetail.jsx
│   │   ├── Confirmation.jsx
│   │   └── Policy.jsx
│   ├── data/            # Data files
│   │   └── apartments.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── App.css          # App styles
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Customization

### Adding New Apartments

Edit `src/data/apartments.js` to add or modify apartment listings.

### Styling

- Global styles: `src/index.css`
- Component styles: Individual component files or `src/App.css`
- Tailwind configuration: `tailwind.config.js`

### Colors

The project uses a custom color scheme defined in `tailwind.config.js`:
- Primary colors (blue tones)
- Accent colors (purple tones)

## 📱 Pages

- `/` - Homepage with featured apartments
- `/apartments` - All apartments listing
- `/apartments/:slug` - Individual apartment details
- `/confirmation` - Booking confirmation page
- `/policy` - Policies and terms

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Notes

- Images are stored in the `public/images/` directory
- The project uses client-side routing (no backend required for basic functionality)
- WhatsApp integration requires updating the phone number in the WhatsAppButton component

## 🤝 Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project.

## 📄 License

This project is private and proprietary.

---

**Prestine Apartment** - Your perfect home away from home in Abuja, Nigeria.

