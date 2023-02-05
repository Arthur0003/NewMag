/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '1720px' },

      '2xl': { max: '1440px' },

      xl: { max: '1200px' },

      lg: { max: '1024px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans Armenian', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0px 2px 20px rgba(34, 24, 94, 0.1)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
