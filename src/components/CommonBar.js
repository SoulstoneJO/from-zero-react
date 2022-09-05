import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import i18n from 'i18next';

const CommonBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeLanguage = (val) => {
    i18n.changeLanguage(val);
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ width: 0.9, alignSelf: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Party Finder
          </Typography>
          <IconButton
            size="large"
            aria-label="language"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <TranslateIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={() => handleChangeLanguage('ja')}>日本語</MenuItem>
            <MenuItem onClick={() => handleChangeLanguage('zh')}>中文</MenuItem>
            <MenuItem onClick={() => handleChangeLanguage('en')}>English</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CommonBar;
