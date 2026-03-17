/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
