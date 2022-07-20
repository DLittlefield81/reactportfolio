import React from 'react'
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




const Footer = () => {
  return (
    <section className='footer'> 
      <hr className='footer__line' />
      <section className='footer__social'>
        <div><LinkedInIcon sx={{ fontSize: "40px" }} /></div>
        <div><GitHubIcon sx={{ fontSize: "40px" }} /></div>
        <div></div>
      </section>
    </section>
  )
}

export default Footer