const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mv-1': '#FB00FF',
        'mv-2': '#9400FF',
        'mv-3': '#003FFF',
        grey: {
          100: "#F5F7FA",
          1000: "#1F2933"
        },
      },
      fontFamily: theme => ({
        'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // pre: {
            //   color: theme("colors.grey.1000"),
            //   backgroundColor: theme("colors.grey.100")
            // },
            // "pre code::before": {
            //   "padding-left": "unset"
            // },
            // "pre code::after": {
            //   "padding-right": "unset"
            // },
            code: {
              backgroundColor: theme("colors.grey.100"),
              color: "#DD1144",
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
