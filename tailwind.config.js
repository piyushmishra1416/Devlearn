/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Anton', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af',
      },
    },
  },
  plugins: [],
}

