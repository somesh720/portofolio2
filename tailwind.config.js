// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'skills-gradient':
          'linear-gradient(38.73deg, rgba(248, 6, 232, 0.27) 0%, rgba(237, 24, 216, 0) 50%), linear-gradient(141.27deg, rgba(3, 37, 255, 0.09) 50%, rgba(0, 26, 255, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
