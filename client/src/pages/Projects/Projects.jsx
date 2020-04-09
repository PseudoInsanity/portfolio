import React, { useState } from 'react';
import { useStyles } from './Projects.js';
import ProjectsTimeline from '../../components/ProjectsTimeline/ProjectsTimeline.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { getSteps, getStepTitle, getStepContent, getGithubLink, getDescription } from './Projects.js';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription.jsx';
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery.jsx';


const Projects = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.background} id="projects">
            <Grid direction="column" container item xs={12} alignItems="center" className={classes.rootGrid}>
                <Typography variant="h2" className={classes.title}>PROJECTS</Typography>
                <hr noshade="true" style={{ color: '#f0fdff', backgroundColor: '#f0fdff', height: 5, width: '5%' }}></hr>
            </Grid>
            <Grid container item xs={12}>
                <Grid container item xs={12} sm={6} alignItems="center" justify="center">
                    <ProjectsTimeline activeStep={activeStep} steps={steps} title={getStepTitle(activeStep)} content={getStepContent(activeStep)} githubLink={getGithubLink(activeStep)} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset} />
                </Grid>

                <Grid container item xs={12} sm={6} alignItems="center" justify="center">
                    {activeStep === 6 ? <ProjectGallery title={getStepTitle(activeStep)} /> : <ProjectDescription activeStep={activeStep} title={getStepTitle(activeStep)} description={getDescription(activeStep)} />}
                </Grid>
            </Grid>

        </div>
    )
}

export default Projects;