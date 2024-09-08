/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],

  theme: {
    extend: {
      colors: {
        bluetheme: "#00072D",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
