import React, { useState } from 'react'
import { Button } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Pdf from "../images/DennisLittlefieldResume.pdf";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Resume text-center align-center" >
      <br />
      <br />
      <br />
      <center>
        <div>
          <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  width="1024"
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              )
            )}
            

          </Document>

          <a href={Pdf} className="text-faded white-link" style={{ textDecoration: 'none' }} download>
              <Button variant="contained" color="success" size="large" startIcon={<CloudDownloadIcon />}>Download Resume</Button></a>
        </div>
      </center>
      <p className="text-center">
      </p>
    </div>
  );
}

export default Resume;