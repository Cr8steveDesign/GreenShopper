/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        entry: {
          "0%, 30%": { opacity: 0, transform: "translate(0px, 100px)" },
          "100%": { opacity: 1, transform: "translate(0px)" },
        },
      },
      animation: {
        entry: "entry 1s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
