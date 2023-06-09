/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./slider.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 5s ease infinite",
      },
      gradientColorStops: {
        blueGlow: "#3D4EDB",
        purpleGlow: "#c63af8",
      },
      keyframes: {
        gradient: {
          "0%,100%": {
            "background-position": "10% 20%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
