const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: ["Inter", ...fontFamily.sans],

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            // Disables pre styling in favor of my custom styling defined in the code block component
            pre: false,
            table: {
              "border-collapse": "collapse",
            },
            tr: {
              "border-width": "1px",
              "border-style": "solid",
              "border-color": theme("colors.gray.700"),
              // TODO: dark mode?
            },
            th: {
              "border-width": "1px",
              "border-style": "solid",
              "border-color": theme("colors.gray.700"),
            },
            td: {
              "border-width": "1px",
              "border-style": "solid",
              "border-color": theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
