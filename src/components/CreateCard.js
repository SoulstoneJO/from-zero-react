import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';

export default function CreateCard() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          width: 207,
          border: '3px dashed #dadce0',
          '&:hover': { transform: 'scale3d(1.05, 1.05, 1)', border: '3px dashed #2196f3' },
        }}>
        <CardMedia
          component="img"
          height="347"
          image="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
          alt="Create"
        />
      </Card>
    </Box>
  );
}
