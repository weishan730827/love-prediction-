/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        },
        'card-border': '#e5e7eb',
        'card-background': '#ffffff',
        'secondary-color': '#4b5563',
        'tertiary-color': '#6b7280',
      },
    },
  },
  darkMode: 'media',
} 