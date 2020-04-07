import React from 'react';
import { useStyles } from './Projects.js';
import ProjectsTimeline from '../../components/ProjectsTimeline/ProjectsTimeline.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";


const Projects = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="projects">


            <Grid direction="column" container item xs={12} alignItems="center" className={classes.rootGrid}>
                <Typography variant="h2" className={classes.title}>PROJECTS</Typography>
                <hr style={{ color: '#f0fdff', backgroundColor: '#f0fdff', height: 5, width: '5%' }}></hr>
            </Grid>
            <Grid item xs={12} alignItems="center" justify="center" id="projects">

                <ProjectsTimeline />
            </Grid>

        </div>
    )
}

export default Projects;