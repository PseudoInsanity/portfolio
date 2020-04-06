import React from 'react';
import { useStyles } from './About.js';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skills from '../../components/Skills/Skills.jsx';
import Avatar from '@material-ui/core/Avatar';
import BathtubIcon from '@material-ui/icons/Bathtub';
import Zoom from 'react-reveal/Zoom';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import GroupIcon from '@material-ui/icons/Group';



const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="about">
            <TopBar />
            <Grid direction="column" container item xs={12} alignItems="center" className={classes.rootGrid}>
                <Typography variant="h2" className={classes.title}>ABOUT</Typography>
                <hr style={{ color: '#242325', backgroundColor: '#242325', height: 5, width: '5%' }}></hr>
            </Grid>
            <Grid item xs={12} container justify="center" direction="row">
                <Grid container item xs={5}>
                    <Typography variant="body1" className={classes.title}>
                        <strong>Who am I?</strong>
                        <br />
                        I am 23 years old, stationed in Malmö, and I am about to graduate the Computer Science program at Kristianstad University (or I already have depending on when youre reading this).
                        I enjoy making order out of chaos and I always try to learn what I can from what I have.
                        <br />
                        <br />
                        <strong>Why choose me?</strong>
                        <br />
                        Although I'm not remotely the greatest coder, I do take a lot of pride in my curiosity, and as my own biggest critic, I always wish to improve myself.
                    </Typography>
                    <Grid item xs container justify="center" className={classes.avatarGrid}>
                        <Zoom bottom cascade>
                            <Grid container justify="center" direction="column" alignItems="center">
                                <Avatar style={{ width: '150px', height: '150px' }} className={classes.avatar} alt="Edmir Suljic">
                                    <BathtubIcon style={{fontSize: 100}}/>
                                </Avatar>
                                <Typography variant="h6" className={classes.avatarTitle}>Clean code</Typography>
                            </Grid>
                            <Grid container justify="center" direction="column" alignItems="center">
                                <Avatar style={{ width: '150px', height: '150px' }} className={classes.avatar} alt="Edmir Suljic" >
                                    <AudiotrackIcon style={{fontSize: 100}}/>
                                </Avatar>
                                <Typography variant="h6" className={classes.avatarTitle}>Great musical taste</Typography>
                            </Grid>
                            <Grid container justify="center" direction="column" alignItems="center">
                                <Avatar style={{ width: '150px', height: '150px' }} className={classes.avatar} alt="Edmir Suljic" >
                                    <GroupIcon style={{fontSize: 100}}/>
                                </Avatar>
                                <Typography variant="h6" className={classes.avatarTitle}>Team player</Typography>
                            </Grid>
                        </Zoom>

                    </Grid>
                </Grid>
                <Grid container item justify="center" xs={6}>
                    <Skills />
                </Grid>



            </Grid>
        </div>

    )
}

export default About;