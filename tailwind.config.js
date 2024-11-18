/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FBBF24", // Mostaza cálido
          dark: "#D97706", // Mostaza oscuro para hover
        },
        background: "#F3F4F6", // Gris claro para fondos
      },
    },
    root: {
      margin: 0,
      padding: 0,
      fontFamily: "sans-serif",
    },
  },
  plugins: [],
};
