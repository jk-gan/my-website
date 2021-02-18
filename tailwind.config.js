module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mv-1': '#FB00FF',
        'mv-2': '#9400FF',
        'mv-3': '#003FFF',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // a: {
            //   color: theme(`colors.blue.600`),
            //   textDecoration: `none`,
            //   "&:hover": {
            //     textDecoration: `underline`,
            //   },
            // },
            // "code::before": false,
            // "code::after": false,
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
