import { content } from "./theme/content";
import { fontFamily } from "./theme/fontFamily";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content,
  theme: {
    extend: {
      fontFamily,
      colors: {
        primary: "#007aff",
      },
    },
  },
  plugins: [],
};
