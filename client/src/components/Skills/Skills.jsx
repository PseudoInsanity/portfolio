import React from 'react';
import { useStyles, skills, BorderLinearProgress } from './Skills.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fade from 'react-reveal';

const Skills = () => {
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.paper}>
            <Grid container item xs justify="center">
                <Fade>
                    <Typography className={classes.title} variant="h3">Skills</Typography>
                </Fade>
            </Grid>
            <List >
                <Grid justify="center" alignItems="center" container item xs={12} >
                    {skills.map((skill, index) =>
                        <ListItem key={index} >
                            <Grid item xs={3}>
                                <Typography style={{ paddingLeft: '10px' }} variant="h6">{skill.type}</Typography>
                            </Grid>
                            <Grid container item xs={7} justify="center" alignItems="center">
                                <BorderLinearProgress
                                    style={{ marginBottom: '20px', marginTop: '10px'}}
                                    variant="determinate"
                                    color="secondary"
                                    value={skill.level} />
                            </Grid>
                            <Grid item xs>
                                <Typography style={{paddingLeft: '10px'}} variant="h6">{skill.level}%</Typography>
                            </Grid>
                        </ListItem>
                    )}
                </Grid>
            </List>
        </Paper >

    )
}

export default Skills;