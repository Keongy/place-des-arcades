"use client";
import {Box, Button, Typography} from "@mui/material";
import {useThemeContext} from "./theme/ThemeContext";
import AnchorTemporaryDrawer from "./components/navigation";
import {DashboardCardList} from "./components/dashboard-card-list";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const {toggleTheme, mode} = useThemeContext();
  const [hide, setHide] = useState(false);
  const hideClass = "hideToTop fullPage";
  const router = useRouter();

  const handleClick = (location: string) => {
    setHide(true);
    setTimeout(() => {
      router.push(location);
    }, 500);
  };

  return (
    <main>
      <div className={hide ? hideClass : undefined}>
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

        <AnchorTemporaryDrawer />
      </div>
    </main>
  );
}
