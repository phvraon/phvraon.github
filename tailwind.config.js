/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B783A9',
          light: '#F8E6F3',
          dark: '#9A6C8E',
        },
        secondary: '#A537FD',
        'dark-blue': '#151B28',
        'light-gray': '#F5F6F8'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'section-title': ['2.5rem', '1.2'],
        'card-title': ['1.25rem', '1.4'],
        'body-large': ['1.125rem', '1.5'],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}