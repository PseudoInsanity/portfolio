import React from 'react';
import { useStyles, SKILLS, BorderLinearProgress } from './Skills.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from 'react-reveal';

const Skills = () => {
    const classes = useStyles();
    const skills = SKILLS;

    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container item xs={12} justify="center" direction="row">
                <Grid justify="center" container item xs={12} >
                    <Fade>
                        <Typography className={classes.title} variant="h3">Skills</Typography>
                    </Fade>
                </Grid>
            </Grid>
            <List >

                <Grid container spacing={3}>
                    {skills.map((skill, index) =>
                        <ListItem key={index} >
                            <Grid item xs={3}>
                                <Typography style={{ paddingLeft: '10px' }} variant="h6">{skill.type}</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <BorderLinearProgress
                                    style={{ margin: '4px', marginBottom: '20px', marginTop: '20px' }}
                                    variant="determinate"
                                    color="secondary"
                                    value={skill.level} />
                            </Grid>
                            <Grid item >
                                <Typography variant="h6">{skill.level}%</Typography>
                            </Grid>
                        </ListItem>
                    )}
                </Grid>
            </List>
        </Paper >

    )
}

export default Skills;