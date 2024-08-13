/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html", 
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#00B9F2',
        'accent-green': '#009649',
        'white': '#FFFFFF',
        'translucent-bg': '#FFFFFFCC',
        'stroke': '#0000001A',
        'black': '#555563',
        'gray': '#838393',
        'field-border': '#BEBEBE',
        'background': '#F5F5F5',
        'text-on-image': '#FFFFFF',
        'pure-black': '#000000',
        'bg-50': '#FFFFFF80',
        'text-on-image-faint': '#FFFFFFB2',
      },
      fontFamily: {
        'roboto': ['Roboto Flex', 'sans-serif'],
      },
      fontSize: {
        'h1': ['76px', '76px'],
        'h2': ['61px', '61px'],
        'h3': ['49px', '49px'],
        'h4': ['39px', '39px'],
        'h5': ['31px', '31px'],
        'h6': ['25px', '25px'],
        'h7': ['20px', '20px'],
        'text-16': ['16px', '28px'],
        'text-14': ['14px', '24px'],
        'small-text-12': ['12px', '14px'],
        'field-text-14': ['14px', '16px'],
        'button': ['14px', '16px'],
        'menu-links': ['13px', '20px'],
        'menu-items': ['14px', '20px'],
      }
    }
  },
  plugins: [],
}
