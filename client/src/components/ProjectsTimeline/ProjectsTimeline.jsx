import React, { useState } from 'react';
import { useStyles, getSteps, getStepTitle, getStepContent, getGithubLink } from './ProjectsTimeline.js';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';

const ProjectsTimeline = () => {
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
        <Grid className={classes.root} item xs={12}>

            <Stepper className={classes.root} activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography variant="h5">{getStepTitle(index)}</Typography>
                            <Typography variant="body1">{getStepContent(index)}</Typography>
                            <Typography variant="body2">Github link: {getGithubLink(index) === 'Not applicable' ? 'Not applicable' : <Link variant="body2" href={getGithubLink(index)}>{getGithubLink(index)}</Link>}
                            </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Thats most of the projects I've been involved with!</Typography>
                    {/* eslint-disable-next-line no-console */}
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            Contact me
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="primary"
                        onClick={handleReset}>Go through projects again!</Button>
                </Paper>
            )}
        </Grid>
    )
}

export default ProjectsTimeline;