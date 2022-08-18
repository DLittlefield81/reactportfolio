import React from 'react';
import {Typography, Box} from '@mui/material/';
import {ContactForm} from '../elements/';

const Contact = () => {
  return (
    <Box style={{ mx: "auto", marginTop: `80px` }}>
      <Typography fontFamily="Josefin Sans" variant="h2" color="primary">
        Contact
      </Typography>
      <hr />
      <ContactForm />
      
      </Box>
  );
}

export default Contact


