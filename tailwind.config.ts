import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react")
const flowbite = require("flowbite-react/tailwind")
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3366FF',
        'white-50': '#FAFBFF',
        'neutral-75': '#F3F5F8',
        'customNeutral': '#777C88',
        'danger': '#D14343',
        'green-40': '#4FBEAB',
        'customGray': '#B0B4C5'
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), flowbite.plugin()],
};
export default config;
