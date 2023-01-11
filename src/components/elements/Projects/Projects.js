import React from 'react';
import './Project.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import PreviewIcon from '@mui/icons-material/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';


function Projects(props) {
  const hasRepo = props.hasRepo
return (
  <Card sx={{ maxWidth: 345, minWidth: 345, margin: 2 }}>
    
      <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: `${props.colour}` }} aria-label="Team Size">
          <Tooltip title={props.size}>{props.group}</Tooltip>
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
      <Typography variant="body" color="text.secondary">
        Role: {props.role}
      </Typography><br/>
      <Typography variant="body" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      {/* Conditional Action */}

      <Tooltip title="View Repository on GitHub">
        <IconButton aria-label="GitHub">
          <Link color="primary" underline="none" href={props.repository} rel="noreferrer" target="_blank" className="btn btn-primary">
            <Typography>
              <GitHubIcon fontSize="large" />
            </Typography>
          </Link>
        </IconButton>
      </Tooltip>
      {/* Conditional Action */}
      <Tooltip title="View Deployed Site">
        <IconButton aria-label="View Deployed Site">
          <Link color="primary" underline="none" href={props.deployed} rel="noreferrer" target="_blank" className="btn btn-primary">
            <Typography>
              <PreviewIcon fontSize="large" />
            </Typography>
          </Link>
        </IconButton>
      </Tooltip>
    </CardActions>
  </Card>

);
}

export default Projects;