import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C1E",
        surface: "#141730",
        text: "#f7f7f7",
        muted: "#b5b5b5",
        accent: "#36C9C2"
      },
      boxShadow: {
        glow: "0 0 40px rgba(54, 201, 194, 0.25)",
        card: "0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 24px 48px -24px rgba(0, 0, 0, 0.45)",
        "card-light": "0 1px 0 rgba(0, 0, 0, 0.04) inset, 0 18px 40px -20px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 20% -20%, rgba(54, 201, 194, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(255, 255, 255, 0.06), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
