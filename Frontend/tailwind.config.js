/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '001011',
      'lightBlue': '#64E9EE',
      'medBlue': '#3AAFB9',
      'darkBlue': '#093A3E',
      'grayBlue': '#97C8EB',

      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'lightGray': '#ADADAD',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
    // extend: {},
  },
  plugins: [],
}

