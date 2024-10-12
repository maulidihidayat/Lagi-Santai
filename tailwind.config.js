/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        poppins : ["poppins","sans-serif"],
      },
      colors: {
        primary: "#57007B",
        secindary: "#F76680",
        terriary: "#FF92AE",
        succes: "#66CB9F",
        warning : "#F7936F",
        danger: "#FF5C5C",
      },
    },
  },
  plugins: [],
};
