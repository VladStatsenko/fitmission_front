/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%' : {transform: 'scale(0, 1)'},
          '100%' : {transform: 'scale(1, 1)'}
        },
      },
      backgroundImage: {
        'pattern': "url('/bg-pattern.jpg')"
      }
    },
  },
  plugins: [],
}

