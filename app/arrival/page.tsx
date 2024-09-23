"use client";
import {Box, Button, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {DashboardCard} from "../components/dashboard-card";
import {usePageTransition} from "@/hooks/usePageTransition";

const ArrivalPage = () => {
  const {transitionClassName, handleNavigation} = usePageTransition(
    "position-bottom-out", // Position initiale en bas (hors écran)
    "slide-out-down", // Sort vers le bas
    "slide-in-up" // Entre depuis le bas
  );

  return (
    <div className={transitionClassName}>
      <Box height="100vh" display="flex" flexDirection="column">
        <Box padding={5}>
          <Button onClick={() => handleNavigation("/")}>
            <ArrowBackIosIcon color="warning" />
          </Button>
        </Box>
        <Box>
          <Typography textAlign="center" variant="h5">
            Infos Arrivée
          </Typography>
        </Box>
        <Box
          bgcolor="white"
          flexGrow={1}
          padding={3}
          borderRadius="20px 20px 0 0"
        >
          <Typography textAlign="center">
            Retrouvez toutes les informations pratiques pour votre arrivée de
            l'hébergement
          </Typography>
          <Box display="flex" justifyContent="center" marginTop="40px">
            <Box display="flex" justifyContent="space-around" width="600px">
              <DashboardCard title="Tranche horaire d'arrivée" />
              <DashboardCard title="Parking" />
              <DashboardCard title="Fiche de Police" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ArrivalPage;
