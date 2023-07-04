/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      screens: {
        'phones-ultra': '613px',
        'phones-max': '570px',
        'phones-max-mini': '437px',
        'phones-pro': '347px'
      }
    },
  },
  plugins: [],
};
