/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        'logo-bounce': 'logoBounce 2s linear infinite alternate',
      },
      keyframes: {
        logoBounce: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-30px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
