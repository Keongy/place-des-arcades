import {createTheme} from "@mui/material/styles";

// Thème pour le mode clair
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

// Thème pour le mode sombre
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
  },
});

export {lightTheme, darkTheme};
