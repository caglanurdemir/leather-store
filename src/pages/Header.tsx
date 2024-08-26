import React from 'react';
import {AppBar, Box, IconButton, Toolbar} from '@mui/material';
import {Menu as MenuIcon} from "@mui/icons-material";

function Header({
                     openedLeftPanel,
                  handleDrawerOpen
                }: {
  openedLeftPanel: boolean;
  handleDrawerOpen: () => void;
}) {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${openedLeftPanel ? 240 : 0}px)`, ml: `${openedLeftPanel ? 240 : 0}px`, transition: 'width 0.3s' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(openedLeftPanel && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box sx={{ flex: 1, textAlign: 'left' }}>
            Good Evening Jane!
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            Search box is gonna be here soon!
          </Box>
          <Box sx={{ flex: 1, textAlign: 'right' }}>
            And here belongs to the users
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
