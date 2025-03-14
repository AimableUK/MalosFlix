/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CCFF00',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Imprima'],
        homenaje: ['homenaje'],
        frenchCanon: ['IM Fell French Canon'],
        electrolize: ['electrolize'],
        Gurajada: ['Gurajada']
      }
    },
  },
  plugins: [],
}

