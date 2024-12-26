/** @type {import('tailwindcss').Config} */
import tailwindPlugins from "./tailwind-plugins";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        bp: "992px",
      },
      fontFamily: {
        amiri: ["var(--font-amiri)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primaryBlue: "#034592",
        primaryBlack: "#475367",
        secondary: "#E9F3FF",
        primary: "#034592",
        "pry-300": "#3D89DF",
        gray: "#475367",
        "gray-300": "#D0D5DD",
        gray2: "#F7F9FC",
        bgColor: "#E3EFFC",
      },
      backgroundImage: {
        uniqueOne:
          "linear-gradient(rgba(3, 69, 146, 0.7), rgba(3, 69, 146, 0.7)), url('https://res.cloudinary.com/ddxssowqb/image/upload/v1733385106/78824_2-removebg-preview_eolysd.png')",
        uniqueTwo:
          "url('https://res.cloudinary.com/ddxssowqb/image/upload/v1733383356/rashid-khreiss-D5xvlpBt6lw-unsplash_1_rkn8sw.png')",
        uniqueThree:
          "linear-gradient(rgba(3, 69, 146, 0.7), rgba(3, 69, 146, 0.7)), url('https://res.cloudinary.com/ddxssowqb/image/upload/v1733385137/78824_3-removebg-preview_e910p2.png')",
        takeTest:
          "linear-gradient(rgba(3, 69, 146, 0.7), rgba(3, 69, 146, 0.7)), url('https://res.cloudinary.com/ddxssowqb/image/upload/v1733411467/Frame_4-removebg-preview_ogplzl.png')",
        aboutBg:
          "url('https://res.cloudinary.com/ddxssowqb/image/upload/v1733419439/Frame_2087325551_fxraaz.png')",
        headerBg:
          "url('https://res.cloudinary.com/ddxssowqb/image/upload/v1733479476/Desktop_-_2_yvxb8l.png')",
      },
    },
  },
  plugins: [tailwindPlugins],
};

export default config;
