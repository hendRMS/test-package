import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "surfaces-dark-surface1":
          "linear-gradient(0deg, rgba(153, 203, 255, 0.05) 0%, rgba(153, 203, 255, 0.05) 100%)",
        "surfaces-dark-surface2":
          "linear-gradient(0deg, rgba(153, 203, 255, 0.08) 0%, rgba(153, 203, 255, 0.08) 100%)",
        skelton:
          "linear-gradient(90deg,#202529 0%,rgba(40, 47, 55, 0.8) 50%,#202529 100%)",
      },
      colors: {
        "primary-primary80": "#99CBFF",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 0%" },
        },
      },
      animation: {
        gradient: "gradient 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
