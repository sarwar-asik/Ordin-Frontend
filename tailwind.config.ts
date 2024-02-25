import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // primary:"#4BB4B4", ///blue
        // primary:"#16697a", 
        primary: "black",
        secondary: "#F6F9FC",
      },
    },
    // screens:{
    //   sm:"425px",
    //   md:"786px",
    //   lg:"1080px"
    // }
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
