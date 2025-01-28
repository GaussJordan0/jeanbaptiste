/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kingred': ['kingred', 'sans-serif'],
        'cocomatLight': ['CocomatLight', 'sans-serif'],
        'cocomatUltralight': ['CocomatUltralight', 'sans-serif']
    },
    colors:{
      'jb-red': '#91050E',
      'jb-yellow' : '#e4bb0f',
      'jb-blue': '#090979',
    }
  },
  plugins: [],
}
}

