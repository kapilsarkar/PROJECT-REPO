/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        "media900px":'900px',
        "media790px":'790px',
        "media360px":'360px',
        "media310px":'310px'
      }
    },
  },
  plugins: [],
}

