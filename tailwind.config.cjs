/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MajorMonoDisplay: ["Major Mono Display", "monospace"],
        SpaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        hackerGreen: "#149414",
        secondary: "#28282B",
      },
    },
  },
  plugins: [],
};