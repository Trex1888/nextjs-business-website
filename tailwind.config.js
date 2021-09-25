module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "rgb(3, 11, 58)",
          DEFAULT: "#061a40",
        },
        blue1: {
          light: "rgb(3, 11, 58)",
          DEFAULT: "#1a80c7",
        },
        btn: {
          light: "rgb(3, 11, 58)",
          DEFAULT: "#17ab55",
        },
        teal1: {
          light: "rgb(3, 11, 58)",
          DEFAULT: "#6ac8d5",
        },
        navy: {
          light: "#085889",
          DEFAULT: "#061a40",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
