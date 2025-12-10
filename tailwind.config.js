/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gold: {
          start: '#C8A951',
          end: '#F1D08A',
          DEFAULT: '#C8A951',
        },
        platinum: '#E5E5E5',
        charcoal: '#1A1A1A',
        'dark-grey': '#2D2D2D',
        'light-grey': '#F8F8F8',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '84px', fontWeight: '200' }],
        'h1': ['56px', { lineHeight: '64px', fontWeight: '500' }],
        'h2': ['40px', { lineHeight: '48px', fontWeight: '500' }],
        'h3': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '28px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '24px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '20px', fontWeight: '500' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '120px',
        '6xl': '160px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.08)',
        'soft': '0 4px 16px rgba(0,0,0,0.12)',
        'medium': '0 8px 32px rgba(0,0,0,0.16)',
        'strong': '0 16px 64px rgba(0,0,0,0.24)',
        'gold-glow': '0 8px 32px rgba(200,169,81,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-luxury forwards',
        'slide-up': 'slideUp 0.8s ease-luxury forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 8px 32px rgba(200,169,81,0.25)' },
          '50%': { boxShadow: '0 8px 48px rgba(200,169,81,0.45)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
