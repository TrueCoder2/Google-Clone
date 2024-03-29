/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        s1: '0 1px 6px rgb(32 33 36 / 28%)',
        s2: '0 1px 1px rgb(0 0 0 / 10%)',
      },
    },
  },
  plugins: [],
}

