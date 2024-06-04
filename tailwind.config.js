/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs : '340px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage:{
        "Siuu" : "url(https://assets.limetray.com/assets/image_manager/uploads/5921/bg-2.png)"
      },
    },
  },
  plugins: [],
}

