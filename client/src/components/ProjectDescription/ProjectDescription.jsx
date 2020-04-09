import React from 'react';
import { useStyles } from './ProjectDescription.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal';



const ProjectDescription = ({ activestep, title, description }) => {
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.paper}>
            <Grid container item justify="center" className={classes.grid} xs={12}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Zoom bottom cascade>
                <Grid justify="center" alignItems="center" container item xs={12}  >
                    <Typography style={{margin: '10px'}} variant="body1">{description}</Typography>
                </Grid>
            </Zoom>
        </Paper>

    );
}

export default ProjectDescription;