import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Travel blog aesthetic: Inter / Manrope / Plus Jakarta Sans
        heading: ['var(--font-inter)', 'var(--font-manrope)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm color palette
        warmWhite: '#FAFAF8',
        warmBlack: '#1A1A18',
        warmRed: '#E63946',
        warmYellow: '#F4D35E',
        warmGray: {
          50: '#F9F7F5',
          100: '#F3F0ED',
          200: '#E8E3DE',
          300: '#D8D0C8',
          400: '#A39E97',
          600: '#625D57',
        },
      },
      spacing: {
        // Increased spacing for airy layout
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        // Soft, modern rounded corners
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        // Soft shadows for modern feel
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
        softHover: '0 12px 40px rgba(0, 0, 0, 0.08)',
        warmGlow: '0 20px 40px rgba(230, 57, 70, 0.08)',
      },
      backgroundImage: {
        // Warm gradients
        warmFade: 'linear-gradient(to bottom, #FAFAF8, #F9F7F5)',
        warmAccent: 'linear-gradient(135deg, #F4D35E 0%, #F9D5A8 100%)',
      },
    },
  },
  plugins: [],
}
export default config
