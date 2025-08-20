/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        'media440': '440px',
       'media560' : '560px'
      },
    },
  },
  plugins: [],
}

