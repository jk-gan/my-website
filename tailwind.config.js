const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mv-1': '#FB00FF',
        'mv-2': '#9400FF',
        'mv-3': '#003FFF',
        cyan: colors.cyan,
        blueGray: colors.blueGray,
      },
      fontFamily: theme => ({
        'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: { 
              textDecoration: "none",
              borderBottom: `2px solid ${theme("colors.cyan.400")}`,
              '&:hover': {
                color: theme("colors.cyan.400"),
              },
            },
            code: {
              backgroundColor: theme("colors.blueGray.100"),
              color: theme("colors.cyan.700"),
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
