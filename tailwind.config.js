/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d55a1'
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        }
      },
      animation: {
        appear: 'appear .8s ease-in-out',
      }
    },
    plugins: [],
  }
}
