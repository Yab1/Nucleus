const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: {
          primary: "#f5f4f4",
          secondary: "",
        },
        dark: {
          primary: "#1c1c1c",
          secondary: "#232323",
          tertiary: "#292929",
        },
      },
      textColor: {
        light: {
          primary: "",
          secondary: "#4d4764",
        },
        dark: {
          primary: "#bdbdbd",
          secondary: "#d2d2d2",
          tertiary: "#acacac",
          // tertiary: "#cccccc",
          // fourth: "#a1a1a1",
        },
      },
      borderColor: {
        light: {
          primary: "#e1e3e4",
          secondary: "",
        },
        dark: {
          primary: "#383838",
          secondary: "",
        },
      },
      colors: {
        "border-light-primary": "#e1e3e4", // primary light border
        "light-primary": "#f5f4f4",
        "black-pearl": "#1c1c1c",
        charcoal: "#232323",
        gunmetal: "#383838",

        "grayish-black": "#1b1c1e",
        "misty-sky": "#f6f7ff",
        "gray-light": "#a5a5a5",
        silver: "#e5e5e5",
        "steel-gray": "#757575",
      },
    },
  },
  plugins: [],
});
