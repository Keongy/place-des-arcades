"use client";
import {Box, Button, Typography} from "@mui/material";
import {useThemeContext} from "./theme/ThemeContext";

import {DashboardCardList} from "./components/dashboard-card-list";
import {usePageTransition} from "@/hooks/usePageTransition";
import {usePreloadPages} from "@/hooks/usePreloadPages";

export default function Home() {
  const {toggleTheme, mode} = useThemeContext();
  const {handleNavigation, transitionClassName} = usePageTransition(
    "position-top-out", // Position initiale à l'écran
    "slide-out-up", // Sort vers le haut
    "slide-in-down" // Arrive du haut à l'entrée
  );

  usePreloadPages();

  return (
    <main>
      <div className={transitionClassName}>
        <Box display="flex" justifyContent="center" mt="50px">
          <Typography fontSize={25}>
            Bienvenue au livret d&apos;accueil Place des Arcades
          </Typography>
        </Box>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle to {mode === "light" ? "dark" : "light"} mode
        </Button>

        <Box display="flex" justifyContent="center">
          <DashboardCardList handleClick={handleNavigation} />
        </Box>
      </div>
    </main>
  );
}
