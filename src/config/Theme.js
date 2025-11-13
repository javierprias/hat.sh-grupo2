import { createTheme } from "@material-ui/core/styles";

export const hackerTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000000",
      paper: "#0a0a0a",
    },
    primary: { main: "#00ff99" },
    secondary: { main: "#00e6b8" },
    text: {
      primary: "#00ff99",
      secondary: "#66ffcc",
    },

    // 🎨 Colores antiguos y extendidos para compatibilidad total
    alabaster: { main: "#000000" },
    mineShaft: { main: "#00ff99" },
    gallery: { main: "#0a0a0a" },
    white: { main: "#00ff99" },
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
      text: "#000000",     // texto negro sobre verde
    },
    // 🌿 Nuevo color usado en EncryptionPanel y DecryptionPanel
    cottonBoll: {
      main: "#66ffcc",
      text: "#99ffd6", // verde claro para textos secundarios
    },
  },

  typography: {
    fontFamily: "'Share Tech Mono', monospace",
    allVariants: { color: "#00ff99" },
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: "8px",
        border: "1px solid #00ff99",
        color: "#00ff99",
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
        color: "#00ff99",
      },
    },
  },
});

// ✅ Aplica el fondo hacker global
export function checkTheme() {
  if (typeof window !== "undefined") {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#00ff99";
    document.body.style.fontFamily = "'Share Tech Mono', monospace";
  }
}
