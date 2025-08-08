export default {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#171c28',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
        accent: {
          light: '#55198b',
          dark: '#8c43ce',
        },
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wave: 'wave 2s infinite',
      },
    },
  },
  plugins: [],
}
