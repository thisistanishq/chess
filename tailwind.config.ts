import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  plugins: [require("tailwindcss-animate")],
  theme: {
    fontSize: {
      xs: "0.8rem",
      sm: "0.875rem",
      base: "1rem",
      "baseSerif": "1.063rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "6xl": "4rem",

    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      backgroundImage: {
        'linear-grid-chess': 'linear-gradient(90deg,#efefef6f 1px,transparent 0),linear-gradient(180deg,#efefef6f 1px,transparent 0)',
        'linear-grid': 'linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) 1px, transparent 0),linear-gradient(180deg, hsla(0, 0%, 100%, 0.1) 1px, transparent 0)',
        'linear-big-grid': 'linear-gradient(90deg, hsla(0, 0%, 100%, 0.25) 1px, transparent 0), linear-gradient(180deg, hsla(0, 0%, 83.9%, 0.25) 1px, transparent 0)',
        'diagonal-grid': 'linear-gradient(45deg, transparent 49.5%, hsla(0, 0%, 100%, 0.25) 0, hsla(0, 0%, 100%, 0.25) 50.5%,transparent 0), linear-gradient(-45deg,transparent 49.5%,hsla(0, 0%, 100%, 0.25) 0,hsla(0, 0%, 100%, 0.25) 50.5%, transparent 0)'
      },

      fontFamily: {
        sans: ['var(--font-sohne)', { fontFeatureSettings: '"kern"', }],
        serif: ['var(--font-plantijn)', { fontFeatureSettings: '"liga", "calt"', }],
        handwritten: ['var(--font-handwritten)', 'Kalam', 'Caveat', 'Dancing Script', 'cursive']
      },

      colors: {
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
        component: {
          DEFAULT: "hsl(var(--component))",
          active: "hsl(var(--component-active))",
        },
        sidebar: "hsl(var(--sidebar))",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        init: {
          '0%': { transform: 'rotateY(-30deg)' },
          '100%': { transform: 'rotateY(0deg)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};

export default config;
