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
        shdw: {
          light: "#7D7D7D",
          dark: "black",
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          h2: {
            // Add your h2 styles here
            fontSize: theme("fontSize.2xl"),
            fontWeight: theme("fontWeight.semibold"),
            marginBottom: theme("margin.4"),
          },
          p: {
            // Add your p styles here
            fontSize: theme("fontSize.base"),
            marginBottom: theme("margin.4"),
          },
          img: {
            width: "100%",
            marginBottom: "40px",
          },
        },
      },
    }),
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
