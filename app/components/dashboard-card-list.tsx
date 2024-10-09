import {Box, Button, Grid2} from '@mui/material';
import {DashboardCard, IDashboardCard} from './dashboard-card';

export interface IDashboardCardConfig extends IDashboardCard {
  location: string;
}

interface IDashboardCardListProps {
  handleClick: (location: string) => void;
  cardConfig: IDashboardCardConfig[];
}

export const DashboardCardList: React.FC<IDashboardCardListProps> = ({
  handleClick,
  cardConfig,
}) => {
  return (
    <Box maxWidth="850px">
      <Grid2 container spacing={3}>
        {cardConfig.map((card, index) => (
          <Grid2
            key={index}
            size={{xs: 6, sm: 6, md: 4}}
            container
            sx={{justifyContent: 'center'}}
          >
            <DashboardCard
              onClick={() => handleClick(card.location)}
              key={index}
              title={card.title}
              icon={card.icon}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
