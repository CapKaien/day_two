/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F2EAD9',
          50: '#FBF7EE',
          100: '#F7F1E2',
          200: '#F2EAD9',
          300: '#E8DCC4',
          400: '#D9C8A6',
        },
        espresso: {
          DEFAULT: '#231410',
          900: '#170B08',
          800: '#231410',
          700: '#3A2218',
          600: '#523226',
          500: '#6B4838',
          400: '#8A6650',
        },
        terracotta: {
          DEFAULT: '#B8492A',
          600: '#9E3D22',
          500: '#B8492A',
          400: '#D06039',
          300: '#E48060',
        },
        sage: {
          DEFAULT: '#7C8567',
          500: '#7C8567',
          300: '#A8B095',
        },
        ink: '#1A0F0B',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        italic: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        ultratight: '-0.06em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marquee-reverse 42s linear infinite',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'subtle-pulse': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
