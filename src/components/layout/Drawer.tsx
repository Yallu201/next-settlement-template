import { Box, Divider, IconButton, List, Toolbar, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FC } from 'react';
import { drawerWidth } from '@/components/layout/constants';
import { mainListItems, secondaryListItems } from './listItems';
import dealiousLogo from '@/assets/logo.png';
import EnvBadge from '@/components/layout/EnvBadge';

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface DrawerProps {
  open: boolean;
  toggle: () => void;
}
const Drawer: FC<DrawerProps> = ({ open, toggle }) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: [1],
        }}
      >
        <Box sx={{ paddingLeft: '76px', display: 'flex', alignItems: 'center', flexGrow: 1, position: 'relative' }}>
          <img src={dealiousLogo} alt="" style={{ height: '40px' }} />
          <EnvBadge />
        </Box>
        <IconButton onClick={toggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </StyledDrawer>
  );
};
export default Drawer;
