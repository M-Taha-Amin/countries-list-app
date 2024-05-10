/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bg-color)',
        textColor: 'var(--text-color)',
        elementColor: 'var(--element-color)',
        inputColor: 'var(--input-color)',
      },
      screens: {
        xs: '476px',
      },
    },
  },
  plugins: [],
};
