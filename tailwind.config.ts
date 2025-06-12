/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // gradientColorStops: {
    //   'primary': '#181753',
    //   'secondary': '#1C1E59',
    //   'danger': '#1C255E',
    // },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        purple: {
          1: '#EBC8C2',
          2: '#B3629D',
          3: "#A462B3",
          4: "#A462B3",
          5: "#8962B3",
        },
        primary: "#626FB3",
        fundo: "#626FB3",
      },
    },
  },
  plugins: [],
} satisfies Config
