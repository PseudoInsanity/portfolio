import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import BathtubIcon from '@material-ui/icons/Bathtub';
import Zoom from 'react-reveal/Zoom';
import Typography from '@material-ui/core/Typography';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import GroupIcon from '@material-ui/icons/Group';
import { useStyles } from './AboutText';

const AboutText = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container item xs={10}>
                <Typography variant="body1" className={classes.title}>
                    <strong>Who am I?</strong>
                    <br />
                        I am 23 years old, stationed in Malmö, and I am about to graduate the Computer Science program at Kristianstad University (or I already have depending on when youre reading this).
                        I enjoy making order out of chaos and I always try to learn what I can from what I have.
                        <br />
                    <br />
                    <strong>Why choose me?</strong>
                    <br />
                        Although I'm not a very experienced coder, I do take a lot of pride in my curiosity, and as my own biggest critic, I always wish to improve myself.
                    </Typography>

            </Grid>
        </>
    )
}

export default AboutText;