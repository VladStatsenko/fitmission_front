/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1240px',
      },
      keyframes: {
        progress: {
          '0%' : {transform: 'scale(0, 1)'},
          '100%' : {transform: 'scale(1, 1)'}
        },
      },
      backgroundImage: {
        'pattern': "url('/bg-pattern.jpg')",
        'new': "url('/bg-new.jpg')",
        'new-mobile': "url('/bg-new-mobile.jpg')",
      }
    },
  },
  plugins: [require('tailwindcss-gradient')],
}

