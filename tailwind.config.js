/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF4',
          100: '#CCDDE9',
          200: '#99BBD3',
          300: '#6699BD',
          400: '#3377A7',
          500: '#1A3A5A', // Deep blue (primary)
          600: '#162E48',
          700: '#122336',
          800: '#0D1724',
          900: '#090C12',
        },
        secondary: {
          50: '#E8F0EF',
          100: '#D1E1DF',
          200: '#A3C3BF',
          300: '#75A59F',
          400: '#47877F',
          500: '#3D7068', // Sea green (secondary)
          600: '#315A53',
          700: '#25433F',
          800: '#182D2A',
          900: '#0C1615',
        },
        accent: {
          50: '#FEF9F3',
          100: '#FDF3E7',
          200: '#FBE7CF',
          300: '#F9DBB7',
          400: '#F7CF9F',
          500: '#F5EFE6', // Warm neutral (accent)
          600: '#C4BFB8',
          700: '#938F8A',
          800: '#62605C',
          900: '#31302E',
        },
        brown: {
          500: '#8B4513', // Deep brown for accents
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      maxWidth: {
        'xxs': '18rem',
      }
    },
  },
  plugins: [],
};