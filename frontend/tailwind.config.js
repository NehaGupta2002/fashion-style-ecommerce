/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
];
export const theme = {
    extend: {},
};
export const plugins = [
  require('tailwind-scrollbar')
];



// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        playwrite: ['"Playwrite DK Loopet"', 'sans-serif'],
      },
    },
  },
};

  