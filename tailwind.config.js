/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#f5f5f5",
          dark: "#1a1a1a",
        },
        txt: {
          light: "#333",
          dark: "#eaeaea",
        },
        acc: {
          light: "#C35500",
          dark: "#FFBB08",
        },
        secondary: {
          light: "#D4D4D4",
          dark: "#403F3F",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
