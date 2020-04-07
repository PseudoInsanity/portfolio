import React from 'react';
import { useStyles } from './HomeText.js';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileImage from '../../img/edmir.png';

import Particles from 'react-particles-js';


const Header = () => {
    const classes = useStyles();
    return (

            <Grid item xs={12}>
                
          
            <Grid direction="column" container item xs={12} justify="center" alignItems="center">
                <Avatar style={{ width: '250px', height: '250px' }} className={classes.avatar} alt="Edmir Suljic" src={ProfileImage} />
                <Typography className={classes.title} variant="h1">Edmir Suljic</Typography>
                <Box width="40%">
                    <Typography className={classes.text} variant="body1">My name is Edmir Suljic and I am a newly graduated Computer Scientist who is eager to learn new things and to start my journey.</Typography>
                </Box>
             
            </Grid>
            {/* <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} /> */}
            </Grid>
            
         

    )
}

export default Header;