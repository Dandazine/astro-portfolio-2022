/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "20em",
      md: "50em",
      lg: "70em",
    },
    colors: {
      primary: "#570DF8",
      secondary: "#570DF8",
      daSe: "#dca54c",
      neutral: "#3D4451",
      nav: "#e6e6e6",
      liNH: "#DCDEDF",
      darkNav: "#141010",
      daNH: "#282323",
      background: "#f7f7f7",
      daBG: "#09090B",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
      light: "#f2f2f2",
      dark: "#0D0D0D",
      text: "#0d0d0d",
    },
    extend: {},
  },
  plugins: [],
};
