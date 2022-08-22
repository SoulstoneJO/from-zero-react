import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Copyright from '../components/copyright';

export default function ResetPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: 1 }}>
          <TextField margin="normal" required fullWidth name="code" label="Auth Code" id="code" />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="newPassword"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password Again"
            type="password"
            id="newPasswordAgain"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Reset
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
