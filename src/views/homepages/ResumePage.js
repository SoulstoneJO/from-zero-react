import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ResumePage = (props) => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} pt={5}>
        <Grid item md={12} sm={12} xs={12} textAlign="center">
          Your Name
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Divider sx={{ borderBottomWidth: 3 }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Grid container flexGrow={1}>
            <Grid item>
              <Typography>Email</Typography>
              <Typography>Phone Number</Typography>
              <Typography>Github</Typography>
              <Typography>Wechat</Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography>Education</Typography>
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography>Technologies and skills</Typography>
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography>Work Experience</Typography>
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography>Introduction</Typography>
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumePage;
