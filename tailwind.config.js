/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mikro: {
          // Main greens
          green: {
            DEFAULT: 'rgb(var(--color-mikro-green) / <alpha-value>)', // #0A8551
            light: 'rgb(var(--color-mikro-green-light) / <alpha-value>)', // #18AD56
            lighter: 'rgb(var(--color-mikro-green-lighter) / <alpha-value>)', // #63EC7A
            dark: 'rgb(var(--color-mikro-green-dark) / <alpha-value>)', // #036F56
          },
          // Yellow variants
          yellow: {
            DEFAULT: 'rgb(var(--color-mikro-yellow) / <alpha-value>)', // #EFB74C
            light: 'rgb(var(--color-mikro-yellow-light) / <alpha-value>)', // #FFE28A
          },
          // Grays
          gray: {
            DEFAULT: 'rgb(var(--color-mikro-gray) / <alpha-value>)', // #AAAAAA
            light: 'rgb(var(--color-mikro-gray-light) / <alpha-value>)', // #EEEEEE
          }
        }
      }
    },
  },
  plugins: [],
}