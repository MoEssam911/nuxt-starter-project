/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "800px",
    },
    extend: {
      colors: {
        // Light theme colors
        lightGray: "#F4F4F4",
        darkGray: "#333333",
        blue: "#0070C9",
        green: "#4CD964",
        red: "#FF3B30",
        yellow: "#FFCC00",

        // Dark theme colors
        darkBackground: "#1F1F1F",
        darkText: "#FFFFFF",
        darkBlue: "#54A0FF",
        darkGreen: "#64D2A8",
        darkRed: "#FF453A",
        darkYellow: "#FFD60A",
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
