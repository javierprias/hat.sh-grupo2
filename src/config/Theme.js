import { createTheme } from "@material-ui/core/styles";

// 🌌 Tema Hacker con buen contraste
export const hackerTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000000", // fondo negro principal
      paper: "#0a0a0a",   // fondos de tarjetas/containers
    },
    primary: { main: "#00ff99" },  // verde neón para elementos principales
    secondary: { main: "#00e6b8" }, // verde brillante secundario
    text: {
      primary: "#ffffff",   // blanco para texto principal → legible
      secondary: "#66ffcc", // verde claro para textos secundarios
    },

    // 🎨 Colores extendidos opcionales
    alabaster: { main: "#000000" },
    mineShaft: { main: "#00ff99" },
    gallery: { main: "#0a0a0a" },
    white: { main: "#ffffff" },
    diamondBlack: { main: "#000000" },
    alto: { main: "#0a0a0a", light: "#1a1a1a" },
    mountainMist: { main: "#00cc99" },
    emperor: { main: "#00b377" },
    iron: { main: "#222222" },
    silverChalice: { main: "#999999" },
    mercury: { main: "#1a1a1a", light: "#0d0d0d" },
    flower: {
      main: "#00ff99",     // verde neón
      light: "#33ffaa",    // hover verde brillante
      text: "#ffffff",     // texto blanco sobre verde
    },
    cottonBoll: {
      main: "#66ffcc",
      text: "#99ffd6", // verde claro para textos secundarios
    },
  },

  typography: {
    fontFamily: "'Share Tech Mono', monospace",
    allVariants: { color: "#ffffff" }, // color blanco para todo el texto por defecto
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: "8px",
        border: "1px solid #00ff99",
        color: "#00ff99", // verde neón sobre fondo negro
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#003322",
          boxShadow: "0 0 10px #00ff99",
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#000000",
        color: "#ffffff", // texto blanco en el AppBar
      },
    },
  },
});

// ✅ Aplica fondo negro y texto blanco a todo el body
export function checkTheme() {
  if (typeof window !== "undefined") {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    document.body.style.fontFamily = "'Share Tech Mono', monospace";
  }
}
