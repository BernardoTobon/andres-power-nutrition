/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green' : '#26A839',
        'fluorescent-green' : '#77D939',
        'tea-green' : '#C6F19B',
        'light-green' : '#E9F0D2',
        'light-brown' : '#B18E62',
      },
    },
  },
  plugins: [],
}
