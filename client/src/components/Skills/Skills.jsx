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

            <Grid justify="center" alignItems="center" container item xs={12} >
                <List dense>
                    {skills.map((skill, index) =>
                        <ListItem key={index} >
                            <Typography variant="body2">{skill.type}</Typography>
                            <BorderLinearProgress
                                style={{ margin: '4px', marginBottom: '20px', marginTop: '20px' }}
                                variant="determinate"
                                color="secondary"
                                value={skill.level}
                            >
                            </BorderLinearProgress>

                            <ListItemText
                                secondary={`${skill.level}%`}
                            />

                        </ListItem>
                    )}

                </List>
            </Grid>
        </Paper >

    )
}

export default Skills;