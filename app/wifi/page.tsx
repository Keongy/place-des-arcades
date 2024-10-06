"use client";
import {useState} from "react";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {usePageTransition} from "@/hooks/usePageTransition";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WifiPasswordOutlinedIcon from "@mui/icons-material/WifiPasswordOutlined";

const WifiPage = () => {
  const {transitionClassName, handleNavigation} = usePageTransition(
    "position-bottom-out", // Position initiale en bas (hors écran)
    "slide-out-down", // Sort vers le bas
    "slide-in-up" // Entre depuis le bas
  );

  const [isCopied, setIsCopied] = useState(false);

  const handlePaperClick = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      // Réinitialiser l'état après 2 secondes
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  };

  return (
    <div className={transitionClassName}>
      <Box height="100vh" display="flex" flexDirection="column">
        <Box padding={5}>
          <Button onClick={() => handleNavigation("/")}>
            <ArrowBackIosIcon color="warning" />
          </Button>
        </Box>

        <Box
          bgcolor="white"
          flexGrow={1}
          padding={3}
          borderRadius="20px 20px 0 0"
        >
          <Container maxWidth="xs">
            <Box display="flex" justifyContent="center">
              <Box mr="10px">
                <WifiPasswordOutlinedIcon />
              </Box>
              <Typography textAlign="center" variant="h5" fontWeight="bold">
                Wifi
              </Typography>
            </Box>
            <Box mt="50px">
              <Typography fontSize="18px" fontWeight="bold" marginBottom="10px">
                Nom du wifi :
              </Typography>
              <Paper
                variant="elevation"
                elevation={8}
                sx={{
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                Bbox
              </Paper>
            </Box>
            <Box mt="50px">
              <Typography fontSize="18px" fontWeight="bold" marginBottom="10px">
                Mot de passe du wifi :
              </Typography>
              <Paper
                component="div" // Transformation en div pour accepter onClick
                variant="elevation"
                elevation={8}
                onClick={() => handlePaperClick("Placearcade06")} // Copier le texte
                sx={{
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  padding: "0 10px",
                  cursor: "pointer", // Changement de curseur
                  backgroundColor: isCopied ? "green" : "white", // Changer la couleur si copié
                  transition: "background-color 0.3s", // Douce transition de la couleur
                  position: "relative", // Pour pouvoir placer le texte "Copié!" en absolu
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    color: isCopied ? "white" : "black",
                    position: "relative",
                  }}
                >
                  Placearcade06
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    position: "absolute", // Position absolue pour "Copié !"
                    right: "10px", // Juste à côté de l'icône
                    color: isCopied ? "white" : "black",
                  }}
                >
                  {isCopied && (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginRight: "10px",
                      }}
                    >
                      Copié !
                    </Typography>
                  )}
                  <ContentCopyIcon fontSize="small" />
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default WifiPage;
