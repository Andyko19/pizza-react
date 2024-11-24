module.exports = {
  content: [
    "./index.html", // Busca clases en el archivo HTML principal
    "./src/**/*.{js,jsx,ts,tsx}", // Busca clases en todos los archivos JSX de tu proyecto
  ],
  theme: {
    extend: {}, // Puedes extender aquí si necesitas personalizar colores, fuentes, etc.
  },
  plugins: [],
};
