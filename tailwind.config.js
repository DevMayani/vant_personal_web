/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // For App Router
    './pages/**/*.{js,ts,jsx,tsx}',   // Optional for Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // Any component folder
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
