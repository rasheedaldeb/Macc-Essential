/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "rgba(58, 64, 140, 1)",
        secondary: "rgba(226, 52, 45, 1)",
        thirdly: "rgba(74, 75, 77, 1)",
        bg: "rgba(248, 248, 248, 1)",
        text: "rgba(112, 112, 112, 1)",
        bg2: "rgba(210, 210, 210, 1)",
        text2: "rgba(34, 34, 34, 1)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
