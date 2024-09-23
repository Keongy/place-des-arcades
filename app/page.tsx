"use client";
import {Box, Button, Typography} from "@mui/material";
import {useThemeContext} from "./theme/ThemeContext";

import {DashboardCardList} from "./components/dashboard-card-list";
import {usePageTransition} from "@/hooks/usePageTransition";

export default function Home() {
  const {toggleTheme, mode} = useThemeContext();
  const {transitionClassName, handleNavigation} = usePageTransition(
    "position-top-out", // Position initiale à l'écran
    "slide-out-up", // Sort vers le haut
    "slide-in-down" // Arrive du haut à l'entrée
  );

  const handleClick = () => {
    handleNavigation("/arrival");
  };

  return (
    <main>
      <div className={transitionClassName}>
        <Box display="flex" justifyContent="center" mt="50px">
          <Typography fontSize={25}>
            Bienvenue au livret d'accueil Place des Arcades
          </Typography>
        </Box>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle to {mode === "light" ? "dark" : "light"} mode
        </Button>

        <Box display="flex" justifyContent="center">
          <DashboardCardList handleClick={handleClick} />
        </Box>
      </div>
    </main>
  );
}
