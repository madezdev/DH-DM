import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0AEB8C',
        secondary: '#052A2D',
        bgSecundary: '#151817',
        bgPrimary: '#D2FFEC',
        error: '#E91010',
        disable: '#CECECE'
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
