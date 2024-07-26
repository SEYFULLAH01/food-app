/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // veya ilgili dosya yollarını belirleyin
    './public/index.html', // veya ilgili dosya yollarını belirleyin
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
