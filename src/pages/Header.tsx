import React from 'react';
import { Box } from '@mui/material';

function Header() {
	return (
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
	);
}

export default Header;
