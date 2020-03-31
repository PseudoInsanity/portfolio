import React from 'react';
import { useStyles } from './About.js';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skills from '../../components/Skills/Skills.jsx';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="about">
            <TopBar />
            <Grid direction="column" container item xs={12}  alignItems="center" className={classes.rootGrid}>
                <Typography variant="h2" className={classes.title}>ABOUT</Typography>
                <hr style={{ color: '#242325', backgroundColor: '#242325', height: 5, width: '5%' }}></hr>
            </Grid>
            <Grid item xs={12} container justify="space-between" direction="row">
                <Grid container item xs={5}>
                    <Typography variant="body1" className={classes.title}>I am 23 years old and I am about to graduate the Computer Science program at Kristianstad University (or I already have depending on when youre reading this). I live in Malmö/></Typography>
                </Grid>
                <Grid container item justify="center" xs={6}>
                    <Skills />
                </Grid>


            </Grid>
        </div>

    )
}

export default About;