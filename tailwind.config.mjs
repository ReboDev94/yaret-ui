/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--yaret-ui-color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--yaret-ui-color-secondary) / <alpha-value>)',
        success: 'rgb(var(--yaret-ui-color-success) / <alpha-value>)',
        error: 'rgb(var(--yaret-ui-color-error) / <alpha-value>)',
        warning: 'rgb(var(--yaret-ui-color-warning) / <alpha-value>)',
        info: 'rgb(var(--yaret-ui-color-info) / <alpha-value>)',
        light: 'rgb(var(--yaret-ui-color-light) / <alpha-value>)',
        dark: 'rgb(var(--yaret-ui-color-dark) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
