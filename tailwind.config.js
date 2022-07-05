module.exports = {
  content: ['./server/**/*.html', './client/**/*.jsx'],
  media: false,
  theme: {
    extend: {
      colors: {
        puce: '#d11d03',
        green: '#8adb55',
        darkGreen: '#17a17b',
        lightGreen: '#b8dfd8',
        orange: '#e5890a',
        red: '#d11d05',
        black: '#363636',
        darkBlue: '#172450',
        blue: '#99ddcc',
      },
      fontFamily: {
        serif: ['"Roboto Slab"', 'serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
