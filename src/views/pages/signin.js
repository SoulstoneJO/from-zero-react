import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';

import Copyright from '../../components/Copyright';
import { useAuth } from '../../components/AuthProvider';
import LoadingBar from '../../components/LoadingBar';
import ErrorSnackBar from '../../components/ErrorSnackBar';

export default function SignIn() {
  const [onLoading, setOnLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    handleClose: () => {
      setAlert({ open: false, message: '' });
    },
  });
  const { onLogin } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const before = new Date();
    setOnLoading(true);
    try {
      await onLogin(data.get('email'), data.get('password'));
    } catch (error) {
      setOnLoading(false);
      const { name } = error;
      setAlert({ open: true, message: name });
    }
    const after = new Date();
    let interval = after - before;
    if (interval < 800) {
      interval = 800 - interval;
      setTimeout(() => {
        setOnLoading(false);
      }, interval);
    } else {
      setOnLoading(false);
    }
  };

  return (
    <LoadingBar isLoading={onLoading}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="forgetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <ErrorSnackBar
        open={alert.open}
        message={alert.message}
        handleClose={() => {
          setAlert({ open: false, message: '' });
        }}
      />
    </LoadingBar>
  );
}
