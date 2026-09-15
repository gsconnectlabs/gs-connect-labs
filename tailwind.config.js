/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2fb',
          100: '#d6e0f5',
          200: '#aec1eb',
          300: '#7e9bdd',
          400: '#5274cb',
          500: '#3556b4',
          600: '#264195',
          700: '#1d3278',
          800: '#152558',
          900: '#0d1838',
          950: '#070e22',
        },
        aws: {
          orange: '#ff9900',
          blue: '#232f3e',
          sky: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'navy-gradient':
          'linear-gradient(135deg, #070e22 0%, #0d1838 45%, #152558 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(82,116,203,0.5)',
        card: '0 10px 40px -15px rgba(7,14,34,0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
      },
    },
  },
  plugins: [],
}
