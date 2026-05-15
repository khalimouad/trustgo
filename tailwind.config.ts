import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
          light: "#4ade80",
        },
        dark: {
          bg: "#0a0a0a",
          card: "#1a1a1a",
          border: "#2a2a2a",
        },
        light: {
          bg: "#ffffff",
          card: "#f5f5f5",
          border: "#e5e5e5",
        }
      },
    },
  },
  plugins: [],
}
export default config
