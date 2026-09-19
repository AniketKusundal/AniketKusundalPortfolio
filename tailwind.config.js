/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        surface: {
          primary: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
          elevated: '#1E1E1E',
        },
        content: {
          primary: '#F5F5F5',
          secondary: '#A0A0A0',
          muted: '#555555',
          faint: '#333333',
        },
        accent: {
          DEFAULT: '#E8734A',
          dim: 'rgba(232,115,74,0.12)',
          border: 'rgba(232,115,74,0.25)',
          hover: '#F0845E',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover: 'rgba(255,255,255,0.15)',
          accent: 'rgba(232,115,74,0.25)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease both',
        'fade-in-up': 'fadeInUp 0.8s ease both',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'draw-line': 'drawLine 1.5s ease both',
        'blink': 'blink 1s steps(2,start) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
