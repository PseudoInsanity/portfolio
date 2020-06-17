import React, { useState } from 'react';
import { useStyles, getImage } from './Projects.js';
import ProjectsTimeline from '../../components/ProjectsTimeline/ProjectsTimeline.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { getSteps, getDate, getStepTitle, getStepContent, getGithubLink, getDescription, getLogo } from './Projects.js';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription.jsx';


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

                <Grid container item xs={12} sm={6} alignItems="flex-start" justify="center">
                    {activeStep !== 7 ? <ProjectDescription logo={getLogo(activeStep)} date={getDate(activeStep)} activeStep={activeStep} title={getStepTitle(activeStep)} description={getDescription(activeStep)} image={getImage(activeStep)} /> : ''}
                </Grid>
            </Grid>

        </div>
    )
}

export default Projects;