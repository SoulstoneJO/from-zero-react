import { Avatar, IconButton, Menu } from '@mui/material';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import i18n from 'i18next';
import { deepOrange } from '@mui/material/colors';

const UserAvatar = (props) => {
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
        <Avatar sx={{ bgcolor: deepOrange[500], width: 38, height: 38 }}>N</Avatar>
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
        <MenuItem onClick={() => handleChangeLanguage('ja')}>Profile</MenuItem>
        <MenuItem onClick={() => handleChangeLanguage('zh')}>LoginOut</MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
