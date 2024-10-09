'use client';
import {Box, Typography} from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import {DashboardCard} from '../components/dashboard-card';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useRouter} from 'next/navigation';
import {DashboardCardList} from '../components/dashboard-card-list';

const CheckInPage = () => {
  const router = useRouter();
  return (
    <PageWrapper title="Infos Arrivée">
      <Typography textAlign="center">
        Retrouvez toutes les informations pratiques pour votre arrivée de
        l&apos;hébergement
      </Typography>
      <Box display="flex" justifyContent="center" marginTop="40px">
        <Box display="flex" justifyContent="space-around" width="600px">
          {/* <DashboardCardList
            handleClick={function (location: string): void {
              throw new Error('Function not implemented.');
            }}
          /> */}

          {/* <DashboardCard
            icon={InfoOutlinedIcon}
            title="Tranche horaire d'arrivée"
            onClick={() => {
              router.push('/');
            }}
          />
          <DashboardCard
            icon={InfoOutlinedIcon}
            title="Parking"
            onClick={() => {
              router.push('/');
            }}
          /> */}
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default CheckInPage;
