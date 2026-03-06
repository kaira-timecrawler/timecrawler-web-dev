/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#faf8f5',
        'text-primary': '#2d2d2d',
        'text-secondary': '#6b6b6b',
        'accent': '#c9a959',
        'accent-dark': '#b8944a'
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
