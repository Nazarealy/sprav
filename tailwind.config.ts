import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Color variables will be defined here and can be updated from Figma design
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        sans: ['var(--font-alternates)', 'sans-serif'],
        alternates: ['var(--font-alternates)', 'sans-serif'],
        montserrat: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        green: {
          DEFAULT: '#28694D',
          dark: '#1f5239',
          light: '#3d8a5f',
        },
        white: {
          DEFAULT: '#FBFBF9',
          alt: '#FFFFFF',
          light: '#F8F8F3',
        },
        black: {
          DEFAULT: '#404040',
        },
      },
    },
  },
  plugins: [],
}
export default config

