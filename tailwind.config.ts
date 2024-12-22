import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "#727BA4",
        secondary: "#FFFBD2",
        primary: "#C7E2F6",
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
        marquee: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-50%, 0, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 150s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

// .wrapper {
//   max-width: 100%;
//   overflow: hidden;
// }

// .marquee {
//   white-space: nowrap;
//   overflow: hidden;
//   display: inline-block;
//   animation: marquee 10s linear infinite;
// }

// .marquee p {
//   display: inline-block;
// }
