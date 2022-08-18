import React, { Component, useState, useEffect } from 'react'
import { Button, Box, Tooltip, Link, Typography } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';


class Resume extends Component {
  
  render() {
    let iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vRD89-io78dIPBockkIdR77lWkIG2xqft4kmXc4oBpc_CuHmx8vr_gC3ACwkY6Ppw/pub?embedded=true";
    let dlLink ="https://docs.google.com/document/d/e/2PACX-1vRD89-io78dIPBockkIdR77lWkIG2xqft4kmXc4oBpc_CuHmx8vr_gC3ACwkY6Ppw/pub"
    let style = {
      width: '80%',
      height: '1100px',
      border: 'none'
    };

    return (
      <Box style={{ mx: "auto", marginTop: `80px` }}>
        <Typography fontFamily="Montserrat Alternates" variant="h2" color="primary">
          Resume
        </Typography>
        <hr />
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <div className='col' style={{ width: '1100px' }} >
            <div className='row'>
              <iframe title="Dennis Littlefield Resume" src={iframeSrc}
                style={style}>
              </iframe>
            </div>
            <div className='row' style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Tooltip title="Download My Resume">
            <Link href={dlLink} target="_blank" style={{mx:'auto', textDecoration: 'none' }} download>
                  <Button style={{ display: "flex",  justifyContent: 'center', alignItems: 'center'}}variant="contained" color="primary" fontsize="24">
                <LocalPrintshopIcon/>&nbsp;  Download or Print My Resume
          </Button></Link>
          </Tooltip>
            </div>
          </div>
       
        
        </div>
      </Box>
    );
  }
}

export default Resume;