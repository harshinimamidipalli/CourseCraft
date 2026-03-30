module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0B3954',
        cream: '#FFFDD0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: "0 6px 20px rgba(0,0,0,0.05)",
        hover: "0 15px 30px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};