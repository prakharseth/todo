module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josef: ["Josefin Sans", "sans-sarif"],
      },
      backgroundImage: {
        dmbg: "url('../public/images/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
