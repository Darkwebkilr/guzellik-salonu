/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#d4af37',
          DEFAULT: '#c5a059',
          dark: '#a68545',
        },
        charcoal: {
          light: '#4a4a4a',
          DEFAULT: '#2c2c2c',
          dark: '#1a1a1a',
        },
        cream: {
          light: '#ffffff',
          DEFAULT: '#fdfaf5',
          dark: '#f5f0e6',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
