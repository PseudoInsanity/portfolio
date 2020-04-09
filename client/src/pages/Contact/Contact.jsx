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
                <hr noshade="true" style={{ color: '#04c960', backgroundColor: '#04c960', height: 5, width: '15%' }}></hr>
                <ContactForm />
                <hr noshade="true" style={{ color: '#04c960', backgroundColor: '#04c960', height: 5, width: '90%', marginTop: '50px' }}></hr>
                <ContactAvatars />
            </Grid>
        </div>
    )
}

export default Contact;