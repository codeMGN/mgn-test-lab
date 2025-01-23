/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: { 
    container: {
      center: true,
    },
    extend: {
      colors:{
        /* green -> pantone - %: hexa */
        "2286": "#88b137",
        "324": "#add8d8",
        "324-37": "#e0f0f0",
        /* purple -> pantone - %: hexa */
        "2112": "#30255f",
        "17-3930":"#8086b8",
        "17-3930-42":"#c9cce4",
        "17-3930-19":"#e9eaf4",
        /* coral -> pantone - %: hexa */
        "178": "#e55a5a",
        "178-65": "#f2988f",
        "178-22": "#fcdcd7",
        /* blue -> pantone - %: hexa */
        "299": "#4a9fdc",
        "297": "#8bc2e6",
        "397-36": "#d5e8f5",
        /* black -> pantone - %: hexa */
        "black-5": "#191e25",
        /* white -> pantone - %: hexa */
        "white-5":"#F0F0F1"
      },
      backgroundImage: theme => ({
         'gradient-1': "url('/gradients/gradient_1.png')",
         'gradient-2': "url('/gradients/gradient_2.png')",
         'gradient-3': "url('/gradients/gradient_3.png')",
         'gradient-4': "url('/gradients/gradient_4.png')",
         'gradient-5': "url('/gradients/gradient_5.png')",
         'home-box': "url('/home/box.png')",
         'testimonial-1': "url('/home/testimonial_1.png')",
         'testimonial-2': "url('/home/testimonial_2.png')",
         'testimonial-3': "url('/home/testimonial_3.png')",
         'solutions-bubble-1': "url('/solutions/message_1.png')",
         'solutions-bubble-2': "url('/solutions/message_2.png')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}

