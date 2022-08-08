import React, { Component } from 'react'
import { Button, Box, Tooltip, Link } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

class Resume extends Component {
  render() {
    let iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vRD89-io78dIPBockkIdR77lWkIG2xqft4kmXc4oBpc_CuHmx8vr_gC3ACwkY6Ppw/pub?embedded=true";
    let dlLink ="https://docs.google.com/document/d/e/2PACX-1vRD89-io78dIPBockkIdR77lWkIG2xqft4kmXc4oBpc_CuHmx8vr_gC3ACwkY6Ppw/pub"
    let style = {
      mx:"auto",
      
      width: '100%',
      height: '700px',
      border: 'none'
    };

    return (
      <Box style={{ mx: "auto", marginTop: `100px` }}>
        <h1>Resume
          </h1>
        <hr />
        <div style={{  justifyContent: 'center', alignItems: 'center'}}>
        <iframe title="Dennis Littlefield Resume" src={iframeSrc}
          style={style}></iframe>
        <Tooltip title="Download My Resume">
            <Link href={dlLink} target="_blank" style={{mx:'auto', textDecoration: 'none' }} download>
          <Button style={{  justifyContent: 'center', alignItems: 'center'}}variant="contained" color="secondary" fontsize="24">
                <LocalPrintshopIcon color="primary" />  Download or Print My Resume
          </Button></Link>
          </Tooltip>
        </div>
      </Box>
    );
  }
}

export default Resume;