/** @type {import('tailwindcss').Config} */

const colors = require('./node_modules/tailwindcss/colors');
const colorSaveList = [];
const extendedColors = {};
const colorValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  safelist: colorSaveList,
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-kaisei)'],
        colors: extendedColors
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      }
    },
    
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
};



for (const key in colors) {
  // console.log(`color ${key}`)

  // To avoid tailWind "Color deprecated" warning
  if (!['lightBlue', 'warmGray', 'trueGray', 'coolGray',  'blueGray'].includes(key))
  {
    extendedColors[key] = colors[key];
    for(const colorValue in colorValues) {
       colorSaveList.push(`text-${key}-${colorValue}`);
       colorSaveList.push(`bg-${key}-${colorValue}`);
    }
  }
}
