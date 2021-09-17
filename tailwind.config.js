module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "rgb(19, 41, 170)",
          DEFAULT: "rgb(3, 11, 58)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
