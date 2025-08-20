/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
       
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      screens:{
        'media1220': '1220px',
        'media360': '360px',
        'media1072': '1072px',
        'media840': '840px',
      },
    },
  },
  plugins: [],
  
}

