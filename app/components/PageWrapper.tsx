'use client';
import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {usePageTransition} from '@/hooks/usePageTransition';
import {ReactNode} from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

const PageWrapper = ({children, title}: PageWrapperProps) => {
  const {transitionClassName, handleNavigation} = usePageTransition(
    'position-bottom-out', // Position initiale en bas (hors écran)
    'slide-out-down', // Sort vers le bas
    'slide-in-up' // Entre depuis le bas
  );

  const handleClick = () => {
    handleNavigation('/');
  };

  return (
    <Box className={transitionClassName}>
      <Box padding={5}>
        <Button onClick={handleClick}>
          <ArrowBackIosIcon color="warning" />
        </Button>
      </Box>
      <Box>
        <Typography textAlign="center" variant="h5">
          {title}
        </Typography>
      </Box>
      <Box height="100vh" display="flex" flexDirection="column">
        <Box
          bgcolor="white"
          flexGrow={1}
          padding={3}
          borderRadius="20px 20px 0 0"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PageWrapper;
