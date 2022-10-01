/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgba(248,69,37,1)",
        secondary: "#f6f5ef",
        black: "#1b1b1b",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#1b1b1b",
        yellow: "#eafe07",
        red: "rgba(248,69,37,1)",
      },
      fontFamily: {
        title: "'Emilys Candy', cursive",
        main: " 'Roboto', sans-serif",
      },
      padding: {
        main: "2rem 3rem",
        text: "0rem 8rem",
      },
      fontSize: {
        title: "11rem",
        parg:"1.6rem"
      },
      lineHeight: {
        title: "170px",
      },
    },
  },
  plugins: [],
};
