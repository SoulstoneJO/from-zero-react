import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LanguageSwitcher from './LanguageSwitcher';

const CommonBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ width: 0.9, alignSelf: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Party Finder
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CommonBar;
