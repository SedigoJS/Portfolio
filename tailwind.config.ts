import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        clockwise: {
          '25%': {
            transform: 'translateX(100%) translateY(100%)',
          },
          '50%': {
            transform: 'translateX(0%) translateY(200%)',
          },
          '75%': {
            transform: 'translateX(-90%) translateY(100%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%) scale(1.5)',
          },
        },
      },
      animation: {
        clockwise: 'clockwise 4s linear infinite',
      },
      animationDelay: {
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.delay-0': { 'animation-delay': '0s' },
        '.delay-1s': { 'animation-delay': '-1s' },
        '.delay-2s': { 'animation-delay': '-2s' },
        '.delay-3s': { 'animation-delay': '-3s' },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
