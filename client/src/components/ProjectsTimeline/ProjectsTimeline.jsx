import React from 'react';
import { useStyles } from './ProjectsTimeline.js';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link as ScrollLink } from 'react-scroll';
import Link from '@material-ui/core/Link';

const ProjectsTimeline = ({ activeStep, steps, handleNext, handleBack, handleReset, title, content, githubLink }) => {
    const classes = useStyles();



    return (
        <Grid className={classes.root} item xs={12}>
            <Stepper className={classes.root} activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography variant="h5">{title}</Typography>
                            <Typography variant="body1">{content}</Typography>
                            <Typography variant="body2">Github link: {githubLink === 'Not applicable' ? 'Not applicable' : <Link variant="body2" color="textSecondary" target="_blank" href={githubLink}>{githubLink}</Link>}
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
                    <ScrollLink
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
                    </ScrollLink>
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