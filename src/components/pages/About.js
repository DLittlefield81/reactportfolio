import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Images from '../images/projects';
export default function About() {
  return (
    <Box style={{ mx: "auto", marginTop: `80px` }}>
      <Typography fontFamily="Josefin Sans" variant="h2" color="primary">
        About
      </Typography>
      <hr />
    <Card sx={{ mx:"auto", minWidth: 345, maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={Images.ProfilePhoto}
          alt="Dennis Littlefield"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack Developer graduate from the University of Toronto, leveraging over 20 years of customer service, problem-solving, and a critical thinking background. Newly developed skills in JavaScript, MongoDB, ExpressJS, NodeJS, and ReactJS. Experienced in optimizing productivity, efficiency and service quality across various environments.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </Box>

  );
}
