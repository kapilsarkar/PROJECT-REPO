/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        'media960px':'960px',
        'media980px':'980px',
        'media600px':'600px',
        'media480px':'480px',
         'media460px':'460px',
         'media421px':'421px'
      }
    },
  },
  plugins: [],
}

