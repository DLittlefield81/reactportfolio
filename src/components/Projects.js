import React from 'react';
import './styles/Project.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


import CoPresentIcon from '@mui/icons-material/CoPresent';
import PreviewIcon from '@mui/icons-material/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';

function Project(props) {


  return (
    <Card  sx={{ maxWidth: 345, minWidth: 345, margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue }} aria-label="recipe">
           <CoPresentIcon/>
          </Avatar>
        }
        title={props.title}
        subheader={props.tech}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <IconButton aria-label="GitHub">
          <a href={props.repository} rel="noreferrer" target="_blank" className="btn btn-primary"><GitHubIcon fontSize="large" /></a>
        </IconButton>
        <IconButton aria-label="View Deployed Site">
          <a href={props.deployed} rel="noreferrer" target="_blank" className="btn btn-primary"><PreviewIcon fontSize="large" /></a>
        </IconButton>

        </CardActions>
    </Card>

  );
}

export default Project;

