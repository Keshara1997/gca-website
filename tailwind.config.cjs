module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gca: {
          50: '#f2f9ff',
          100: '#e6f2ff',
          500: '#2563eb',
          700: '#1e40af'
        }
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}
