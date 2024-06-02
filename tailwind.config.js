/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      padding: {
        base: "8rem",
      },
      colors: {
        primary: "#bbed2f", // Color 1 (lime green)
      },

      backgroundImage: {
        "hero-foor":
          " linear-gradient(to top, rgba(30, 20, 150, 0.3), rgba(30, 20, 150, 0.7)), url('https://images.nightcafe.studio/jobs/yolyIRrs8kIOnW1CH2zG/yolyIRrs8kIOnW1CH2zG--u922i.jpg?tr=w-1600,c-at_max')",

        "hero-footer":
          "linear-gradient(to top, rgba(128, 128, 128, 0), rgba(30, 20, 150, 0.7)), url('https://kampouse-food.my.canva.site/images/f486c54af226981830809c02831e42ce.jpg')",
      },
    },
  },
  plugins: [],
};
