import {Box, Typography} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

export interface IDashboardCard {
  title: string;
}

export const DashboardCard = ({title}: IDashboardCard) => {
  return (
    <Box
      borderRadius="10px"
      bgcolor="rgba(227, 241, 234, .7)"
      width="161px"
      height="161px"
      padding="5px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <AssignmentIcon fontSize="large" />
      <Typography>{title}</Typography>
    </Box>
  );
};
