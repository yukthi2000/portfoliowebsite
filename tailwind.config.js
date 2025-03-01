const { DEFAULT_CIPHERS } = require("tls");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        black:{
          DEFAULT:'#000',
          100:'#000319'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
