import React from 'react';
import { useStyles } from './About.js';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutText from '../../components/AboutText/AboutText.jsx';
import AboutIcons from '../../components/AboutIcons/AboutIcons.jsx';
import Skills from '../../components/Skills/Skills.jsx';



const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="about">
            <Grid
                direction="column"
                container
                item
                xs={12}
                alignItems="center"
                className={classes.rootGrid}
            >
                <Typography variant="h2" className={classes.title}>
                    ABOUT
            </Typography>
                <hr
                    style={{
                        noshade: "true",
                        color: "#242325",
                        backgroundColor: "#242325",
                        height: 5,
                        width: "5%"
                    }}
                ></hr>
            </Grid>

            <Grid item container className={classes.content}>
                <Grid
                    item
                    xs={6}
                    container
                    className={classes.aboutContent}
                    justify="center"
                    alignItems="center"
                >
                    <AboutText />
                    <Grid
                        item
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <AboutIcons />
                    </Grid>
                </Grid>
                <Grid container item justify="center" xs={6} alignItems="flex-start" className={classes.aboutContent}>
                    <Skills />
                </Grid>
            </Grid>
        </div>
    );

}

export default About;