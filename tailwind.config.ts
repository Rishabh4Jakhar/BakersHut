import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: 'var(--surface)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)',
        border: 'var(--border)',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(52, 28, 14, 0.12)',
        glow: '0 0 0 1px rgba(127, 74, 17, 0.08), 0 16px 40px rgba(127, 74, 17, 0.18)',
      },
      borderRadius: {
        xl2: '1.5rem',
        xl3: '2rem',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(237, 186, 103, 0.22), transparent 42%), linear-gradient(180deg, rgba(255, 248, 239, 0.95), rgba(252, 241, 223, 1))',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
