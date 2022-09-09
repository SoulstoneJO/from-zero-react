import { IconButton, Menu } from '@mui/material';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';
import i18n from 'i18next';

const LanguageSwitcher = (props) => {
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
    <>
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
    </>
  );
};

export default LanguageSwitcher;
