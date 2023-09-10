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
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        'nunito': ['nunito', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        'black': '#001011',
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
        'test': '#6DAEDB'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
    // extend: {},
  },
  plugins: [],
}

