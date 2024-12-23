module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
