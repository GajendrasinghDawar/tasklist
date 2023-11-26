/** @type {import('tailwindcss').Config} */
const {
  gray,
  blue,
  redDark,
  red,
  green,
  mauve,
  violet,
  iris,
  grass,
  blackA,
  whiteA,
  sand,
  olive,
  slate,
  sage
} = require('@radix-ui/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...mauve,
        ...green,
        ...violet,
        ...iris,
        ...grass,
        ...blackA,
        ...whiteA,
        ...sand,
        ...olive,
        ...slate,
        ...sage,
      },
      gridTemplateColumns: {
        'imageGrid': "repeat(auto-fit, minmax(150px, auto))",
      }
    },
  },
  plugins: [],
}
