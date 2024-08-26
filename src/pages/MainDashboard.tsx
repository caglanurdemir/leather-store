import React from 'react';
import {Box, Toolbar, Typography} from '@mui/material';

function MainDashboard({ openedLeftPanel }: { openedLeftPanel: boolean }) {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, transition: 'margin 0.3s', ml: openedLeftPanel ? `240px` : '0px' }}
    >
      <Toolbar />
      <Typography paragraph>
        Main dashboard content goes here.
      </Typography>
      <Typography paragraph>
        You can add more sections or components here.
      </Typography>
    </Box>
  );
}

export default MainDashboard;
