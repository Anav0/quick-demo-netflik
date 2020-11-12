module.exports = {
  future: {},
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue"],
  },
  theme: {
    extend: {
      screens: {
        macbook: "1440px",
        HD: "1920px",
        "2k": "2560px",
        "4k": "3840px",
      },
      width: {
        30: "7rem",
        60: "15.4rem",
        80: "30rem",
        90: "42rem",
      },
      height: {
        30: "7rem",
        32: "8.6rem",
        60: "17rem",
        70: "24rem",
      },
      maxWidth: {
        50: "50%",
        55: "55%",
        60: "60%",
        65: "65%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
      },
      borderRadius: {
        extra: "6px",
        xl: "16px",
      },
    },
  },
  variants: {},
  plugins: [],
};
