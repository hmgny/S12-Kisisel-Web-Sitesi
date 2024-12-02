/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        Pembe :"#E92577",
        Sari :"#FFE86E",
        Gri:"#777777",
        Siyah:"#000000",
        Siyah0a0a14: "#0A0A14",
        lightGray: "#F4F4F4",
        Bordo : "#AF0C48",
        Mavi: "#DDEEFE",
        Yesil:"#D9F6F1",
        Github: "#1769FF",
        Linkedin: "#0077b5",
        mail: "#AF0C48"
      },
      width:{
        w480 : "480px"
      },
      height:{
        h320: "320px"
      },
      borderRadius:{
        border72px :"72px"
      }
    },
  },
  plugins: [],
}

