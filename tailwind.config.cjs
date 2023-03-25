/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {'24': '6rem'},
      colors: {
        'primary-color-1': '#FD4D4D',

      },
    },
  },
  plugins: [],
};
