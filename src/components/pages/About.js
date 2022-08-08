import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Images from '../images/projects';
export default function About() {
  return (
   
    <Card sx={{ mx:"auto", marginTop: '100px', minWidth: 345, maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={Images.ProfilePhoto}
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack Developer leveraging over 20 years of customer service, problem-solving, and a critical thinking background. Currently working on a certificate as a Full Stack Developer from the University of Toronto, with newly developed skills in JavaScript, NodeJS, and ExpressJS. Experienced in optimizing productivity, efficiency and service quality across various environments.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>

  );
}
