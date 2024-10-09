import {Box, Button, SvgIconTypeMap, Typography} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

export interface IDashboardCard {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  onClick: () => void;
}

export const DashboardCard = ({title, icon: Icon, onClick}: IDashboardCard) => {
  return (
    <Button variant="text" onClick={onClick}>
      <Box
        borderRadius="10px"
        bgcolor="rgba(227, 241, 234, .8)"
        width="161px"
        height="161px"
        padding="5px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {Icon && <Icon fontSize="large" />}
        <Box mt="10px">
          <Typography fontWeight="bold" textAlign="center">
            {title}
          </Typography>
        </Box>
      </Box>
    </Button>
  );
};
