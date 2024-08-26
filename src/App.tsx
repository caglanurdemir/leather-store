import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, Home as HomeIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import Header from './pages/Header';
import MainDashboard from "./pages/MainDashboard";

const drawerWidth = 240;

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Home', 'Dashboard'].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <HomeIcon /> : <DashboardIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header openedLeftPanel={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
          },
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {drawer}
      </Drawer>
      <MainDashboard openedLeftPanel={open}/>
    </Box>
  );
}

export default App;
