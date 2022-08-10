import React from 'react'
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <section className='footer'> 
      <hr className='footer__line ' />
      <section className='footer__social'>
        <div><a href='https://www.linkedin.com/in/dennislittlefield/'><LinkedInIcon color='primary' sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://github.com/DLittlefield81/'><GitHubIcon color='primary' sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://www.youtube.com/channel/UC324WAYP2MNEFE2OkCL3xvQ'><YouTubeIcon color='primary' sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://www.facebook.com/DLittlefield1981'><FacebookIcon color='primary' sx={{ fontSize: "40px" }} /></a></div>
      </section>
    </section>
  )
}

export default Footer