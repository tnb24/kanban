import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
