import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Divider, Grid, IconButton, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const TimeSpan = styled('span')({
  color: '#80868b',
  fontSize: '14px',
  letterSpacing: '0.3px',
  marginLeft: '5px',
  flexGrow: 1,
});

export default function ResumeCard() {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        width: 210,
        cursor: 'pointer',
        '&:hover': { transform: 'scale3d(1.05, 1.05, 1)', border: '1px solid #2196f3' },
      }}>
      <CardMedia
        component="img"
        height="260"
        image="https://lh3.google.com/u/0/d/1M6CqVlfVIDrdCKU1I--SJCwKnrej4t4rLUZN88Justw=w416-iv6"
        alt="Resume"
        onClick={() => navigate('resume')}
      />
      <Divider />
      <CardActions disableSpacing>
        <Grid container direction="column" p={1}>
          <Grid item>
            <Typography variant="h7">Title</Typography>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <ArticleIcon sx={{ color: blue[500] }} />
            <TimeSpan>2022年9月7日</TimeSpan>
            <IconButton size="small">
              <MoreVertIcon sx={{ color: '#444' }} />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
