/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './privacy-policy.html', './terms-of-service.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#E7E2D9',
        card: '#141414',
        border: '#292929',
        muted: '#9C948A',
        bronze: {
          DEFAULT: '#B39D7D',
          light: '#C9B89A',
          dark: '#9A8665',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#3A3A3A',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
