import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: "var(--font-montserrat)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "var(--pink)",
        orange: "var(--orange)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        green: "var(--green)",
        offwhite: "var(--offwhite)",
      },
      textShadow: {        
        background: "4px 4px 2px rgba(33, 13, 74)",
        
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
  ],
} satisfies Config;
