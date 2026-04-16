import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C1E",
        surface: "#101010",
        text: "#f7f7f7",
        muted: "#b5b5b5",
        accent: "#36C9C2"
      },
      boxShadow: {
        glow: "0 0 40px rgba(54, 201, 194, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
