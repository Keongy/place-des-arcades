"use client";
import {Button, Typography} from "@mui/material";
import {useThemeContext} from "./theme/ThemeContext";

export default function Home() {
  const {toggleTheme, mode} = useThemeContext();
  return (
    <main>
      <Typography>Welcome to my app</Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle to {mode === "light" ? "dark" : "light"} mode
      </Button>
    </main>
  );
}
