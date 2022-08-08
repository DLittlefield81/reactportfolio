import React from 'react';
import {Typography, Box} from '@mui/material/';
import ContactUs from '../contactForm';
const Contact = () => {
  return (
    <Box style={{ mx: "auto", marginTop: `80px` }}>
      <Typography fontFamily="Josefin Sans" variant="h2" color="primary">
        Contact Me
      </Typography>
      <hr />
      <ContactUs/>
      </Box>
  );
}

export default Contact