const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "#e1e3e4",
        "off-white": "#f5f4f4",
        "black-pearl": "#1c1c1c",

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
