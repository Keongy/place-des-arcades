import {Box, Button, Grid2} from "@mui/material";
import {DashboardCard, IDashboardCard} from "./dashboard-card";
import {usePageTransition} from "@/hooks/usePageTransition";

interface IDashboardCardConfig extends IDashboardCard {
  location: string;
}

interface IDashboardCardListProps {
  handleClick: (location: string) => void;
}

export const DashboardCardList: React.FC<IDashboardCardListProps> = ({
  handleClick,
}) => {
  const cardConfig: IDashboardCardConfig[] = [
    {
      title: "Infos arrivée",
      location: "/check-in",
    },
    {
      title: "Infos pratiques",
      location: "/practical",
    },
    {
      title: "Infos départ",
      location: "/check-out",
    },
    {
      title: "Wifi",
      location: "/wifi",
    },
    {
      title: "Autour de moi",
      location: "/around-me",
    },
    {
      title: "Partenaires",
      location: "/partners",
    },
    {
      title: "Livre d'or",
      location: "/guestbook",
    },
  ];

  return (
    <Box maxWidth="850px">
      <Grid2 container spacing={3}>
        {cardConfig.map((card, index) => (
          <Grid2 key={index} size={{xs: 2, sm: 4, md: 3}}>
            <Button onClick={() => handleClick(card.location)}>
              <DashboardCard key={index} title={card.title} />
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
