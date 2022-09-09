import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const DrawerListItem = (props) => {
  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={props.onClick}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}>
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.text} sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default DrawerListItem;
