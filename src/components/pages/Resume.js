import React, { Component } from 'react'
import './Resume.css'
import { Button, Box, Tooltip, Link, Typography, Paper } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

class Resume extends Component {
  
  render() {
    let iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vRwcjKMBpPN17E0zanDS7woSD7TvHxRQ6VZ4ds0ccAH2mU8g4gPWjvHYTXIcu-ITisQNFixJy3voRfN/pub?embedded=true";
    let dlLink = "https://docs.google.com/document/d/e/2PACX-1vRwcjKMBpPN17E0zanDS7woSD7TvHxRQ6VZ4ds0ccAH2mU8g4gPWjvHYTXIcu-ITisQNFixJy3voRfN/pub"
    let style = {
      
      height: '100vh',
      border: 'none'
    };
    
    
    return (
      <Box style={{ mx: "auto", marginTop: `80px` }}>
        <Typography fontFamily="Montserrat Alternates" variant="h2" color="primary">
          Resume
        </Typography>
        <hr />
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <div id='Resume__block' className='col ' >
            <div className='row '>
              <Paper elevation={3}>
                <iframe id='Resume__frame' title="Dennis Littlefield Resume" src={iframeSrc}
                  style={style}>
                </iframe>
              </Paper>
            </div>
            <div className='row' style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Tooltip title="Download My Resume">
                <Link href={dlLink} target="_blank" style={{ mx: 'auto', textDecoration: 'none' }} download>
                  <Button className='m-2' style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} variant="contained" color="primary" fontsize="24">
                    <LocalPrintshopIcon />&nbsp;  Download or Print My Resume
                  </Button>
                </Link>
              </Tooltip>
            </div>
          </div>


        </div>
      </Box>
    );
  }
}

export default Resume;