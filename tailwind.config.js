/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {

      colors: {
        primary: '#ffbbdc', // Color 1 (dark purple)
      },

      backgroundImage: {
        'hero-foor': " linear-gradient(to top, rgba(128, 128, 128, 0), rgba(30, 20, 150, 0.7)), url('https://kampouse-food.my.canva.site/images/05e2af143e80a3acf18bf4604982abeb.jpg')",
      }



    },
  },
  plugins: [],
};
