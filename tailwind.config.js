/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#508D69',
          dark: '#3c7855',
          light: '#5c9d77',
        },
      },
    },
  },
  plugins: [],
};
