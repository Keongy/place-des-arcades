'use client';
import {Box, Button, Modal as BaseModal, Typography} from '@mui/material';
import {useThemeContext} from './theme/ThemeContext';

import CloseIcon from '@mui/icons-material/Close';
import {
  DashboardCardList,
  IDashboardCardConfig,
} from './components/dashboard-card-list';
import {usePageTransition} from '@/hooks/usePageTransition';
import {usePreloadPages} from '@/hooks/usePreloadPages';
import {useState} from 'react';
import styled from '@emotion/styled';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WifiPasswordOutlinedIcon from '@mui/icons-material/WifiPasswordOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const cardConfig: IDashboardCardConfig[] = [
  {
    title: 'Infos arrivée',
    location: '/check-in',
    icon: ListAltOutlinedIcon,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  {
    title: 'Infos pratiques',
    location: '/practical',
    icon: InfoOutlinedIcon,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  {
    title: 'Infos départ',
    location: '/check-out',
    icon: InventoryOutlinedIcon,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  {
    title: 'Wifi',
    location: '/wifi',
    icon: WifiPasswordOutlinedIcon,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
  {
    title: 'Autour de moi',
    location: '/around-me',
    icon: LocationOnOutlinedIcon,
    onClick: function (): void {
      throw new Error('Function not implemented.');
    },
  },
];

export default function Home() {
  const {toggleTheme, mode} = useThemeContext();
  const {handleNavigation, transitionClassName} = usePageTransition(
    'position-top-out', // Position initiale à l'écran
    'slide-out-up', // Sort vers le haut
    'slide-in-down' // Arrive du haut à l'entrée
  );
  const [openModal, setOpenModal] = useState(true);

  usePreloadPages();

  const handleTriggerModal = () => {};

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <main>
      <Box className={transitionClassName}>
        <Box display="flex" justifyContent="center" mt="50px">
          <Typography fontSize={30} fontWeight="bold">
            Bienvenue au livret d&apos;accueil Place des Arcades
          </Typography>
        </Box>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle to {mode === 'light' ? 'dark' : 'light'} mode
        </Button>

        <Box display="flex" justifyContent="center">
          <DashboardCardList
            cardConfig={cardConfig}
            handleClick={handleNavigation}
          />
        </Box>
        <div>
          <Button type="button" onClick={handleTriggerModal}>
            Open modal
          </Button>

          {/* <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={openModal}
            onClose={handleCloseModal}
          >
            <Box
              sx={{
                width: {xs: "90%", md: "50%"},
                backgroundColor: "white",
              }}
              textAlign="center"
              borderRadius="20px"
              padding="50px"
              position="relative"
            >
              <Box
                component="div"
                onClick={handleCloseModal}
                position="absolute"
                top="10px"
                right="10px"
              >
                <CloseIcon />
              </Box>
              <Box mb="30px">
                <Typography
                  variant="h2"
                  id="unstyled-modal-title"
                  className="modal-title"
                >
                  Mot d&apos;accueil
                </Typography>
              </Box>
              <Typography
                textAlign="justify"
                id="unstyled-modal-description"
                className="modal-description"
              >
                Chers voyageurs, Nous sommes ravis de vous accueillir dans notre
                location. <br /> Permettez-nous de nous présenter, nous sommes
                Gabrielle et Olivier, vos hôtes dévoués et passionnés. <br />{" "}
                <br /> Notre objectif est de vous offrir une expérience agréable
                pendant votre séjour. Nous avons donc soigneusement aménagé
                notre location pour répondre à vos besoins. Nous sommes
                impatients de vous accueillir et de faire de votre séjour une
                expérience inoubliable. <br /> <br /> N&apos;hésitez pas à nous
                contacter si vous avez des questions ou des demandes spécifiques
                avant votre arrivée.
              </Typography>
            </Box>
          </Modal> */}
        </div>
      </Box>
    </main>
  );
}
