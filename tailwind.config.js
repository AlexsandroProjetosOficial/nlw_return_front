module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      borderRadius: {
        md: '0.25rem' /** 4px */
      },

      colors: {
        brand: {
          300: '#996Dff',
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
