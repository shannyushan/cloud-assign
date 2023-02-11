/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src//*.{html,js}",
    './src/components/**/*.{html,js}',
    
  
   ],
 
    theme: {
      extend: {

         boxShadow: {
        card: '2px 2px 100px 40px rgba(0, 0, 0, 0.05)',
      },
         colors: {
        primary: { //ultramarine
          DEFAULT: '#083f89',
          '50': '#f8f6f7',
          '100': '#ff9d01',
          '200' : '#0f0506'
         
        },
      },
      },
    },
    plugins: [],
  }