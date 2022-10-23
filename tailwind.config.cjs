/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "20em",
      md: "50em",
      lg: "70em",
    },
    colors: {
      primary: "#f9d72f",
      secondary: "#e0a82e",
      neutral: "#18182f",
      nav: "#252732",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
      light: "#f2f2f2",
      dark: "#2a2d3a",
    },
    extend: {},
  },
  plugins: [],
};
