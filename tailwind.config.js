/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Satoshi": ["Satoshi Variable", "SF pro", "Arial", "Calibri"]
      },
      backgroundImage: {
        'trust-card-bg-gradient': 'linear-gradient(to top, #12FF88, #3DFF9E)',
      },
    },
  },
  plugins: [],
}