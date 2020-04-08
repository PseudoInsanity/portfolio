import React from 'react';
import { useStyles } from './Contact.js';
import ContactAvatars from '../../components/ContactAvatars/ContactAvatars.jsx';
import Typography from '@material-ui/core/Typography';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import { Grid } from '@material-ui/core';


const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="contact">
            <Grid direction="column" container item xs={12} justify="center" alignItems="center" className={classes.rootGrid}>
                <Typography className={classes.title} variant="h1">Contact me</Typography>
                <hr style={{ color: '#04c960', backgroundColor: '#04c960', height: 5, width: '15%' }}></hr>
                <ContactForm />
            </Grid>
            <Grid>
                <hr style={{ color: '#04c960', backgroundColor: '#04c960', height: 5, width: '90%', marginTop: '50px' }}></hr>
                <ContactAvatars />
            </Grid>

            {/* </div>
                    <Particles
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
                        }} />*/}
        </div>
    )
}

export default Contact;