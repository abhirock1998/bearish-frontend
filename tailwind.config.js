/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        app_brown: "#A53A01",
        app_border: "#E9EDF2",
        main_area: "#F2F5F8 ",
      },
      borderColor: {
        gray_color: "#E9EDF2",
        dark_blue: "#000aff",
        dark_brown: "#A53A01",
      },
      boxShadow: {
        create_button: "0px 6px 6px #00767b29",
        storage_card: "0px 3px 6px #00000029",
      },
    },
  },
  plugins: [],
};
