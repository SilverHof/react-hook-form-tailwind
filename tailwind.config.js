/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
      screens: {
         sm: "640px",
         md: "768p",
         lg: "1024px",
         xl: "1280px",
      },
      container: {
         screens: {
            sm: "640px",
            md: "768p",
            lg: "1024px",
            xl: "1280px",
         },
         center: true,
         padding: {
            sm: "15px",
            md: "15px",
            lg: "15px",
            xl: "15px",
         },
      },
      colors: {
         white: "#ffffff",
         dark: "#191919",
         blue: "#1fb6ff",
         pink: "#ff49db",
         orange: "#ff7849",
         green: "#13ce66",
         "gray-dark": "#273444",
         gray: "#8492a6",
         "gray-light": "#d3dce6",
      },
      fontFamily: {
         sans: ["", ""],
      },
   },
   plugins: [],
};
