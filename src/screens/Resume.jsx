import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Bar from "../components/Bar";
import CertificateCard from "../components/CertificateCard";
import ResumeCard from "../components/ResumeCard";
import CertificateData from "../utils/certificateData";
import educationData from "../utils/educationData";
import experienceData from "../utils/experienceData";
import languages from "../utils/languageData";
import tools from "../utils/toolsData";

function Resume({ dark }) {
  return (
    <Container className="resume_component">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography>
            <h2>Education</h2>
          </Typography>
          {educationData.map((data) => (
            <ResumeCard dark={dark} data={data} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <h2>Experience</h2>
          </Typography>
          {experienceData.map((data) => (
            <ResumeCard dark={dark} data={data} />
          ))}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>
            <h2>Language & Framework</h2>
          </Typography>
          <div className="bar_content">
            {languages.map((data) => (
              <Bar dark={dark} data={data} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            <h2>Tools & Softwares</h2>
          </Typography>
          <div className="bar_content">
            {tools.map((data) => (
              <Bar dark={dark} data={data} />
            ))}
          </div>
        </Grid>
      </Grid>
      <div className="certificate">
        <Typography>
          <h2>Certificates</h2>
        </Typography>
        <Grid container spacing={3}>
          {CertificateData.map((data) => (
            <CertificateCard dark={dark} data={data} />
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Resume;
