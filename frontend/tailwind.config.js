/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        merriweather:["Merriweather", "serif"],
        dancing:[ "Dancing Script", 'cursive'],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        light: {
          primary: '#1788ae',
          secondary: '#700c86',
          background: '#F8FAFC',
          bg_two: '#E2E8F0',
          text: '#1E293B',
          text_sec: '#475569',
        },
        dark: {
          primary: '#3498db',
          secondary: '#9b59b6',
          nav_bg: '#111827',
          background: '#0F172A',
          text: '#F8FAFC',
        },
      },
       
    },
  },
  plugins: [],
}

