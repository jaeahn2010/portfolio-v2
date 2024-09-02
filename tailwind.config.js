/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['"Courier New"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

