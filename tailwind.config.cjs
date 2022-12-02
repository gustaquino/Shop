/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contact: "url('/assets/contact.jpg')",
      },
    },
  },
  plugins: [],
};
