import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Figma color palette
        primary: {
          50: '#f6f6f6',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b8b8b8',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4f4f4f',
          800: '#343434',
          900: '#1a1a1a',
        },
        accent: {
          blue: '#84b1f5',
          red: '#ff7676',
        }
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'h1': ['36px', { lineHeight: '1.2', letterSpacing: '-0.792px' }],
        'h2': ['24px', { lineHeight: '1.3', letterSpacing: '-0.528px' }],
        'body': ['16px', { lineHeight: '1.2', letterSpacing: '-0.352px' }],
        'caption': ['16px', { lineHeight: '1.1', letterSpacing: '0.96px' }],
        'button': ['16px', { lineHeight: '1.1', letterSpacing: '-0.352px' }],
        'news-caption': ['12px', { lineHeight: '1.2', letterSpacing: '0.72px' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      backdropBlur: {
        '15': '15px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
