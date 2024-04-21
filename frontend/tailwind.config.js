/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        "customDown": "0px 4px 10px -4px rgba(0, 0, 0, 0.3)",
        "customLeft": "0px 4px 10px -4px rgba(0, 0, 0, 0.3)",
        "customRight": "0px 4px 10px -4px rgba(0, 0, 0, 0.3)",
      },
      borderWidth: {
        "6": "6px",
      },
      colors: {
        "transparent": "transparent",
        "bodybg": "#FFF9EF",
        "primaryBlue": "#1C244B",
        "hoverBlue": "#4D5A96",
        "bgLightBlue": "#D9DFED",
        "bgLightPink": "#EDDAD9",
        "lineColor": "#EDE6D9",
        "bluebg": "#D0D5E3",
      },
      screens: {
        "xmd": "780px", //Window size for tablet
        "3xl": "1500px", //window size for 4k display
        "4xl": "2400px", //window size for 4k display
      },
      spacing: {
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "15%": "15%",
        "17%": "17%",
        "18%": "18%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "91%": "91%",
        "92%": "92%",
        "93%": "93%",
        "94%": "94%",
        "95%": "95%",
        "96%": "96%",
        "97%": "97%",
        "98%": "98%",
        "99%": "99%",
        "100%": "100%",
        "110%": "110%",
        "120%": "120%",
        "130%": "130%",
        "140%": "140%",
        "150%": "150%",
        "160%": "160%",
        "170%": "170%",
        "180%": "180%",
        "190%": "190%",
        "200%": "200%",

        "1vw": "1vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "7vw": "7vw",
        "8vw": "8vw",
        "9vw": "9vw",
        "10vw": "10vw",
        "12vw": "12vw",
        "13vw": "13vw",
        "14vw": "14vw",
        "15vw": "15vw",
        "17vw": "17vw",
        "18vw": "18vw",
        "20vw": "20vw",
        "25vw": "25vw",
        "30vw": "30vw",
        "35vw": "35vw",
        "37vw": "37vw",
        "40vw": "40vw",
        "42vw": "42vw",
        "45vw": "45vw",
        "50vw": "50vw",
        "55vw": "55vw",
        "60vw": "60vw",
        "65vw": "65vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "91vw": "91vw",
        "92vw": "92vw",
        "93vw": "93vw",
        "94vw": "94vw",
        "95vw": "95vw",
        "96vw": "96vw",
        "97vw": "97vw",
        "98vw": "98vw",
        "99vw": "99vw",
        "100vw": "100vw",
        "105vw": "105vw",
        "110vw": "110vw",
        "115vw": "115vw",
        "120vw": "120vw",

        "1vh": "1vh",
        "2vh": "2vh",
        "3vh": "3vh",
        "4vh": "4vh",
        "5vh": "5vh",
        "6vh": "6vh",
        "7vh": "7vh",
        "8vh": "8vh",
        "9vh": "9vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "37vh": "37vh",
        "40vh": "40vh",
        "42vh": "42vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "91vh": "91vh",
        "92vh": "92vh",
        "93vh": "93vh",
        "94vh": "94vh",
        "95vh": "95vh",
        "96vh": "96vh",
        "97vh": "97vh",
        "98vh": "98vh",
        "99vh": "99vh",
        "100vh": "100vh",
        "105vh": "105vh",
        "110vh": "110vh",
        "115vh": "115vh",
        "120vh": "120vh",

        "5rem": "5rem",
        "10rem": "10rem",
        "15rem": "15rem",
        "20rem": "20rem",
        "25rem": "25rem",
        "30rem": "30rem",
        "35rem": "35rem",
        "40rem": "40rem",
        "45rem": "45rem",
        "50rem": "50rem",
        "55rem": "55rem",
        "60rem": "60rem",
        "65rem": "65rem",
        "70rem": "70rem",
        "75rem": "75rem",
        "80rem": "80rem",
        "85rem": "85rem",
        "90rem": "90rem",
      },
    },
  },

  plugins: [],
};
