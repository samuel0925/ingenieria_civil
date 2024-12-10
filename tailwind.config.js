/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB800', // Yellow/gold color
          hover: '#E6A600',
        },
        secondary: {
          DEFAULT: '#4A4A4A', // Dark gray
          light: '#F5F5F5', // Light gray
        }
      }
    },
  },
  plugins: [],
};