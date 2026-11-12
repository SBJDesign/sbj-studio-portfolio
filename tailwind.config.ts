import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        "ink-soft": "#1a1a1a",
        paper: "#ffffff",
        mute: "#7f8080",
        line: "#bbbbbb",
        accent: "#36C9C2",
        "accent-pale": "#dff5f3"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Times New Roman", "serif"]
      },
      letterSpacing: {
        display: "-0.04em"
      }
    }
  },
  plugins: []
};

export default config;
