/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--yaret-ui-color-primary, 0 75 135) / <alpha-value>)',
        secondary: 'rgb(var(--yaret-ui-color-secondary, 124 82 149) / <alpha-value>)',
        success: 'rgb(var(--yaret-ui-color-success, 75 149 96) / <alpha-value>)',
        error: 'rgb(var(--yaret-ui-color-error, 224 79 57) / <alpha-value>)',
        warning: 'rgb(var(--yaret-ui-color-warning, 244 195 0) / <alpha-value>)',
        info: 'rgb(var(--yaret-ui-color-info, 155 184 211) / <alpha-value>)',
        light: 'rgb(var(--yaret-ui-color-light, 227 232 241) / <alpha-value>)',
        dark: 'rgb(var(--yaret-ui-color-dark, 39 54 59) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
