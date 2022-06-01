module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        "custom":'0 0 10px 0 #FFC83A'
      },
      colors:{
        'orangy':"#FF3D00",
        'orang':'#FF8A00',
        'bg_dark':'#111111',
        'shadow_org':"#FFC83A"
      }
    },
  },
  plugins: [],
}
