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
        forest: {
          dark: "#2d5f6b",
          mid: "#357d8f",
          green: "#3e7f93",
          footer: "#254f5a",
        },
        gold: {
          DEFAULT: "#3e7f93",
          light: "#5a9aad",
        },
        cream: "#ffffff",
        "text-body": "#1a1a1a",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
