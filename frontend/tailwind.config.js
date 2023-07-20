/* eslint-disable no-undef */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["forest", "cyberpunk", "cmyk", "dark", "lemonade"],
    extend: {
      fontFamily: {
        'poppins': ["'Poppins'", "'sans-serif'"],
        'abrilFatFace' : ["'Abril\\Fatface'", "'cursive'"]
      },
    },
    base: true, // applies background color and foreground color for the root element by default
    styled: true, // includes daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your HTML tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI class names (components, modifiers, and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
