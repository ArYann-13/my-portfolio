/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        grotesk:      ['Space Grotesk', 'Inter', 'sans-serif'],
        inter:        ['Inter', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        dancing:      ['Dancing Script', 'cursive'],
      },

      colors: {
        light: {
          primary:    '#1A1A1A',
          secondary:  '#3F3F46',
          accent:     '#52525B',
          gold:       '#71717A',
          background: '#FAFAF8',
          bg_two:     '#F4F4F2',
          card:       'rgba(255, 255, 255, 0.88)',
          text:       '#1A1A1A',
          text_sec:   '#71717A',
          border:     'rgba(0, 0, 0, 0.08)',
        },
        dark: {
          primary:    '#C4B5FD',
          secondary:  '#A78BFA',
          accent:     '#E8C872',
          gold:       '#F0D78C',
          nav_bg:     'rgba(6, 9, 18, 0.78)',
          background: '#060912',
          bg_two:     '#0E1428',
          card:       'rgba(14, 20, 40, 0.68)',
          text:       '#F3F1FF',
          text_sec:   '#9499B8',
          border:     'rgba(196, 181, 253, 0.16)',
        },
      },

      animation: {
        fadeIn:    'fadeIn 0.8s ease-in-out',
        fadeInUp:  'fadeInUp 0.8s ease-out both',
        float:     'float 5s ease-in-out infinite',
        spinGlow:  'spinGlow 1s linear infinite',
        shimmer:   'shimmer 2.5s linear infinite',
        pulse2:    'pulse 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },

      boxShadow: {
        glow:     '0 0 24px rgba(139, 92, 246, 0.4)',
        'glow-lg':'0 0 48px rgba(232, 200, 114, 0.35)',
        card:     '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 8px 32px rgba(167, 139, 250, 0.15)',
      },

      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
};
