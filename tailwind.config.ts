// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
      },
    },
  },
  // Also make sure content is configured correctly!
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate")],
};
export default config;
