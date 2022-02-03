module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        primary: '#064635',
        secondary: '#519259',
        accent1: '#F0BB62',
        accent2: '#F4EEA9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
