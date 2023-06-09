/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: { 24: '6rem' },
      colors: {
        'primary-color': '#FD4D4D',
        'secondary-color': '#ffffff',
        'tertiary-color': '#AF8CCE',
        'btn-text-color': '#230042',
      },
      backgroundColor: {
        secondary: '#0F002E',
        orange: '#FD4D4D',
      },
      backgroundColor: {
        secondary: '#0F002E',
      },
    },
  },
  plugins: [],
};
