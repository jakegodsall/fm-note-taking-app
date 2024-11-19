/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          950: "#0E121B",
          900: "#191B25",
          800: "#232530",
          700: "#2B303B",
          600: "#525866",
          500: "#717784",
          400: "#99A0AE",
          300: "#CACFD8",
          200: "#E0E4EA",
          100: "#F3F5F8",
          50: "#F5F7FA",
          0: "#FFFFFF",
        },
        blue: {
          700: "#2547D0",
          500: "#335CFF",
          50: "#EBF1FF",
        },
        green: {
          500: "#21C16B",
          100: "#D1FBE9",
        },
        red: {
          500: "#FB3748",
          100: "#FFD5D8",
        },
      },
    },
  },
  plugins: [],
};
