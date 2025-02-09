/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","frontend/components/*"],
    theme: {
      extend: {
        colors: {
          lightGreen: "#A8D5BA",
          mediumGreen: "#6BBF8A",
          green: "#4B9B6E",
          darkGreen: "#2E7D5C",
          deepGreen: "#1B5E3A",
        },
      },
    },
    plugins: [],
  };
  