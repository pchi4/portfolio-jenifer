// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1A1A1A", // Ébano
          earth: "#8B4513", // Terracota
          clay: "#A45D3D", // Argila/Barro
          gold: "#B8860B", // Ouro Fechado
          sand: "#F9F5F1", // Fundo Suave (Off-white)
          accent: "#4A2C2A", // Marrom Café profundo
        },
      },
      fontFamily: {
        // Sugestão de fontes que casam bem com essa estética
        serif: ["var(--font-playfair-display)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
};
