import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './AboutText';

const AboutText = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container item xs={10}>
                <Typography variant="body1" className={classes.title}>
                    <strong>Who am I?</strong>
                    <br />
                        I am 23 years old, stationed in Malmö, and I am about to graduate the Computer Science program at Kristianstad University (or I already have depending on when you're reading this).
                        I enjoy making order out of chaos and I always try to learn what I can from what I have.
                        <br />
                    <br />
                    <strong>Why choose me?</strong>
                    <br />
                        Although I'm not a very experienced coder, I do take a lot of pride in my curiosity, and as my own biggest critic, I always wish to improve myself.
                        <br />
                        I also believe that my social skills is what sets me apart and what makes me a great fit for you. Communication is very important in professional circumstances and being able to communicate with anyone is equally as important as being able to program.
                    </Typography>

            </Grid>
        </>
    )
}

export default AboutText;