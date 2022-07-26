import React, { useState } from 'react'
import { Button } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Pdf from "../images/DennisLittlefieldResume.pdf";

function Resume() {
  const [pages] = useState([
    {
      name: "resume"
    }
  ]);
  const [currentPage] = useState(pages[0]);
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-white mb-4">
            <br /><br /><br /><br />
            <h1 className="text-center">Resume</h1>
            <hr className="light my-4" />
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Git</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>SASS</li>
              <li>WordPress</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>MERN Stack</li>
            </ul>
            
           
            <p className="text-center">
              <a href={Pdf} className="text-faded white-link" style={{ textDecoration: 'none' }} download>
                <Button variant="contained" color="success" size="large" startIcon={<CloudDownloadIcon />}>Download Resume</Button></a>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;