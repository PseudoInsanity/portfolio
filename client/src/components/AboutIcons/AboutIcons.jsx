import React from 'react';
import { useStyles } from '../AboutIcons/AboutIcons.js';
import Avatar from '@material-ui/core/Avatar';
import BathtubIcon from '@material-ui/icons/Bathtub';
import Zoom from 'react-reveal/Zoom';
import Typography from '@material-ui/core/Typography';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import GroupIcon from '@material-ui/icons/Group';
import Grid from '@material-ui/core/Grid';


const AboutIcons = () => {
    const classes = useStyles()

    return (
        <Grid item xs container direction="row" justify="center" className={classes.avatarGrid}>
        <Zoom bottom cascade>
            <Grid container justify="center" direction="column" alignItems="center">
                <Avatar style={{ width: '100px', height: '100px' }} className={classes.avatar} alt="Edmir Suljic">
                    <BathtubIcon style={{ fontSize: 90 }} />
                </Avatar>
                <Typography variant="h6" className={classes.avatarTitle}>Clean code</Typography>
            </Grid>
            <Grid container justify="center" direction="column" alignItems="center">
                <Avatar style={{ width: '100px', height: '100px' }} className={classes.avatar} alt="Edmir Suljic" >
                    <AudiotrackIcon style={{ fontSize: 90 }} />
                </Avatar>
                <Typography variant="h6" className={classes.avatarTitle}>Great musical taste</Typography>
            </Grid>
            <Grid container justify="center" direction="column" alignItems="center">
                <Avatar style={{ width: '100px', height: '100px' }} className={classes.avatar} alt="Edmir Suljic" >
                    <GroupIcon style={{ fontSize: 90 }} />
                </Avatar>
                <Typography variant="h6" className={classes.avatarTitle}>Team player</Typography>
            </Grid>
        </Zoom>
    </Grid>
    )
}

export default AboutIcons;