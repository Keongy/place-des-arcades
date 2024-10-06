import {Box, Button, Grid2} from "@mui/material";
import {DashboardCard, IDashboardCard} from "./dashboard-card";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WifiPasswordOutlinedIcon from "@mui/icons-material/WifiPasswordOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
      icon: ListAltOutlinedIcon,
    },
    {
      title: "Infos pratiques",
      location: "/practical",
      icon: InfoOutlinedIcon,
    },
    {
      title: "Infos départ",
      location: "/check-out",
      icon: InventoryOutlinedIcon,
    },
    {
      title: "Wifi",
      location: "/wifi",
      icon: WifiPasswordOutlinedIcon,
    },
    {
      title: "Autour de moi",
      location: "/around-me",
      icon: LocationOnOutlinedIcon,
    },
  ];

  return (
    <Box maxWidth="850px">
      <Grid2 container spacing={3}>
        {cardConfig.map((card, index) => (
          <Grid2
            key={index}
            size={{xs: 6, sm: 6, md: 4}}
            container
            sx={{justifyContent: "center"}}
          >
            <Button onClick={() => handleClick(card.location)}>
              <DashboardCard key={index} title={card.title} icon={card.icon} />
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
